/* Tweaks on top of Sveltia CMS. Loaded right after sveltia-cms.js. */
(function () {
  // --- Preview pane: only the title and the text --------------------------
  // The default preview lists every field (categories, authors, images…).
  // Editors only want to read the piece, so each collection with a body gets
  // a template that renders the title and the body.
  var TextPreview = createClass({
    render: function () {
      var entry = this.props.entry;
      return h(
        "article",
        { className: "lc-preview" },
        h("h1", { "data-key-path": "title", tabIndex: 0 }, entry.getIn(["data", "title"])),
        this.props.widgetFor("body")
      );
    },
  });

  [
    // Folder collections
    "post", "autores", "bocanadas", "ediciones", "events", "catastrofe",
    // Files in "Páginas"
    "quienes_somos", "contactenos", "gracias",
  ].forEach(function (name) {
    CMS.registerPreviewTemplate(name, TextPreview);
  });

  CMS.registerPreviewStyle(
    [
      ".lc-preview { max-width: 42rem; margin: 2rem auto; padding: 0 1rem;",
      "  font-family: Georgia, 'Times New Roman', serif; font-size: 1.1rem; line-height: 1.6; color: #222; }",
      ".lc-preview h1 { font-size: 1.8rem; line-height: 1.25; margin-bottom: 1.5rem; }",
      ".lc-preview img { max-width: 100%; height: auto; }",
      ".lc-preview blockquote { margin-left: 0; padding-left: 1rem; border-left: 3px solid #ccc; color: #555; }",
    ].join("\n"),
    { raw: true }
  );

  // --- Paste from Word as text, not as a picture ---------------------------
  // Word (and Pages, LibreOffice…) put a PNG snapshot of the selection on the
  // clipboard next to the text. Sveltia sees "image file + HTML" and uploads
  // the picture. When the clipboard has real text and its HTML holds no
  // <img>, re-dispatch the paste without the file so the text goes in.
  window.addEventListener(
    "paste",
    function (event) {
      if (!event.isTrusted) return; // our own re-dispatched event
      var data = event.clipboardData;
      var target = event.target;
      if (!data || !target || !target.closest) return;
      var editable = target.closest('[contenteditable="true"]');
      if (!editable) return;

      var hasFile = Array.prototype.some.call(data.items || [], function (item) {
        return item.kind === "file";
      });
      var html = data.getData("text/html");
      var text = data.getData("text/plain");
      if (!hasFile || !text.trim() || /<img[\s>]/i.test(html)) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      try {
        var clean = new DataTransfer();
        if (html) clean.setData("text/html", html);
        clean.setData("text/plain", text);
        editable.dispatchEvent(
          new ClipboardEvent("paste", { clipboardData: clean, bubbles: true, cancelable: true })
        );
      } catch (e) {
        // Browsers that can't build a ClipboardEvent: paste as plain text.
        document.execCommand("insertText", false, text);
      }
    },
    true
  );
})();
