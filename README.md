# Development Site for La Crítica Del Derecho

Está basado en el template de [Darin Dimitroff](https://twitter.com/deezel), [spacefarm.digital](https://www.spacefarm.digital).

Este repositorio es público y contiene todo el sitio de La Crítica del Derecho. 


## Cómo funciona

- **Sitio:** [Hugo](https://gohugo.io/) (fuentes en `site/`), con búsqueda de [Pagefind](https://pagefind.app/).
- **Publicación:** GitHub Pages. Cada push a `main` corre `.github/workflows/hugo.yml`, que construye el sitio y lo publica en <https://www.lacritica.ar/>.
- **Editor de contenidos:** [Sveltia CMS](https://github.com/sveltia/sveltia-cms) en `/admin/` (configuración en `site/static/admin/config.yml`). Guardar en el CMS hace un commit directo a `main`; para que una pieza no se publique todavía, marcar **Borrador**.

### Acceso al CMS

Hace falta una cuenta de GitHub con permiso de escritura en `lacritica/lacritica` y un *fine-grained personal access token*:

1. GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → *Generate new token*.
2. Resource owner: **lacritica**. Repository access: *Only select repositories* → `lacritica/lacritica`. (La organización tiene que permitir fine-grained tokens.)
3. Permissions → Repository → **Contents: Read and write**.
4. En <https://www.lacritica.ar/admin/>, elegir *Sign in with Token* y pegar el token.

### Desarrollo local

```sh
yarn install
yarn start        # hugo server con borradores
yarn build        # sitio + índice de búsqueda en dist/
```

Para editar con el CMS sin tocar GitHub: `yarn start`, abrir `http://localhost:1313/admin/` en Chrome o Edge y elegir *Work with Local Repository*.
