<img 
  src="https://github.com/Terra-Cognita/Terra-Cognita.github.io/blob/main/src/assets/static_backgrounds/bgBannerReadme.png" 
  alt="Terra Cognita Welcome" 
  width="100%">

<p align="center">
  <img 
    src="https://github.com/Terra-Cognita/Terra-Cognita.github.io/blob/main/public/monogram.svg"
    alt="Terra Cognita TC Symbol" 
    width="15%">
</p>

# <p align="center"> Terra Cognita - Landing Page</p>

<p align="center"><b><em>
  Terra Cognita is an innovative, online, strategic, and cooperative RPG game, in which you create your own unique AI powered characters and guide them to explore an entirely new magical world.
</em></b></p>

#

<br />

**This repository holds the development of the Terra Cognita webpage.**\
This project is a JavaScript-based application built using [Vue.js 3](https://vuejs.org/) framework and [Vite](https://vitejs.dev/) dev server, running on [Node.js®](https://nodejs.org/en), and consists of:

- Frontend built using [Vue.js 3 Composition API](https://vuejs.org/api/composition-api-setup.html) and [Tailwind CSS Framework](https://tailwindcss.com/), plus [Vue Router](https://router.vuejs.org/) and [Pinia](https://pinia.vuejs.org/) store with [Persisted State](https://prazdevs.github.io/pinia-plugin-persistedstate/).
- Backend using the [Supabase Platform](https://supabase.com/), an open source Firebase which includes a full [Postgres](https://www.postgresql.org/) database.

This application serves as the primary interface for TC end users as part of a larger ecosystem for user interaction and experience.

<br />
<details open>
  <summary><b>TABLE OF CONTENTS</b></summary>

- [ Terra Cognita - Landing Page](#-terra-cognita---landing-page)
- [](#)
  - [PROJECT SETUP](#project-setup)
    - [Requirements](#requirements)
    - [First Time Setup](#first-time-setup)
    - [DevEnv and Deploy](#devenv-and-deploy)
  - [PROJECT ORGANIZATION](#project-organization)
    - [Project Styling](#project-styling)
    - [Project Composables](#project-composables)
      - [Composable: useAssets](#composable-useassets)
    - [Project Components](#project-components)
      - [Components: elements](#components-elements)
      - [Components: frames](#components-frames)
      - [Components: globalLayouts](#components-globallayouts)
      - [Components: layouts](#components-layouts)
    - [Project Sections \& Pages](#project-sections--pages)
  - [STATUS AND ROADMAP](#status-and-roadmap)
  - [AUTHORS AND ACKNOWLEDGEMENT](#authors-and-acknowledgement)
  - [SUPPORT](#support)
  - [LICENSE](#license)

## PROJECT SETUP

### Requirements

**This project requires to install [Node.js](https://nodejs.org/en) version 16.0 or higher**.\
Contributing to this repository requires to install the [Git](https://git-scm.com/) system.

<blockquote>

_Recommended [VS Code](https://code.visualstudio.com/) IDE extensions setup:_

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) (enable Prettier)
</blockquote>

Obs.: _A [.vscode/settings.json](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/blob/main/.vscode/settings.json) file is provided to guarantee Prettier as editor formatter._

### First Time Setup

In the local folder where this project will run, first clone this repo

```
git clone https://github.com/Terra-Cognita/Terra-Cognita.github.io.git
```

Then, when the repository has been cloned, navigate to the repo's folder and install all project dependencies

```
cd Terra-Cognita.github.io   # local-repository-folder
npm install                  # installing the dependencies
```

_The project setup is done and the project environment is ready for usage._

### DevEnv and Deploy

For running the project on development mode

```
npm run dev
```

To preview production mode

```
npm run build
npm run preview
```

**Deployment:** This repository provides a [Github workflow](https://github.com/Terra-Cognita/Terra-Cognita.github.io/blob/main/.github/workflows/deploy.yml) to deploy on every push to the `main` branch. There is no need for running deployment code.

<br />

## PROJECT ORGANIZATION

This project was created through [Vue scaffolding](https://vuejs.org/guide/quick-start.html) that uses a build setup based on Vite.\
Vite automatically resolves a config file named [vite.config.js](https://github.com/Terra-Cognita/Terra-Cognita.github.io/blob/main/vite.config.js) inside project root. For more information on Vite's setup, access [Configuring Vite](https://vitejs.dev/config/#configuring-vite).

<details open>
  <summary><b>Project Structure</b></summary>

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── locales/
│   ├── pages/
│   ├── router/
│   ├── sections/
│   ├── store/
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── ...
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
└── vite.config.js

public/:

src/: Contains the frontend source code for the web application.

(root/):
Contains the general configuration files for the code-project and the project-repository, including the following:
  ─ index.html: The default project webpage
  ─ package.json: The npm’s configuration file to manage the project's metadata, handle the project's dependencies and devDependencies, and describe how to interact with and run the application.
  ─ tailwind.config.cjs & postcss.config.cjs: The files for configuring and customizing the project's styling through the Tailwind Framework. For detailed information, see the `Project Styling` section below.
  ─ vite.config.js: The configuration file for the Vite build tool. For detailed information, access the Configuring Vite link provided in this section's description above.
```

</details>

The following subsections will detail the key files & folders of TC project's structure.
Non detailed parts are common structures of web application projects that we assume devs are familiar to.

### Project Styling

The project styling follows the [Tailwind CSS Framework](https://tailwindcss.com/docs/installation) structure and documentation.
To better understand how Tailwind works with custom styles, we refer to the [documentation](https://tailwindcss.com/docs/adding-custom-styles).\
The TC's custom style configuration can be found in the following files:

<details>
  <summary><b>./tailwind.config.cjs</b></summary>

The [tailwind.config.cjs](https://github.com/Terra-Cognita/Terra-Cognita.github.io/blob/main/tailwind.config.cjs) configuration file holds the project's customized style as an extension of Tailwind’s default configuration.
In such a file, one can find/define the project's base styling, such as color palette or typography setup.
For better information on how to use this config file, we refer to the [Customization section of Tailwind's documentation](https://tailwindcss.com/docs/configuration).

</details>

<details>
  <summary><b>./postcss.config.cjs</b></summary>

The [postcss.config.cjs](https://github.com/Terra-Cognita/Terra-Cognita.github.io/blob/main/tailwind.config.cjs) is designed to integrate CSS preprocessors to the Tailwind framework.
_The current version of this project uses only the required configuration to run Tailwind on Vue.js project._\
 For better information on how to use this config file, we refer to the [Preprocessors section of Tailwind's documentation](https://tailwindcss.com/docs/using-with-preprocessors).

</details>

<details>
  <summary><b>./src/style.css</b></summary>

The [style.css](https://github.com/Terra-Cognita/Terra-Cognita.github.io/blob/main/src/style.css) is the project's stylesheet.
In such a file, one can find/define truly custom CSS rules for the project.\
 For better information on how to use this functionality, we refer to the [CSS Tailwind's documentation](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer).

</details>

### Project Composables

The [./src/composables/](https://github.com/Terra-Cognita/Terra-Cognita.github.io/tree/main/src/composables) folder holds `.js` files comprising functions leveraging Vue's Composition API to encapsulate and reuse stateful logic (refer to [Vue's Composables doc](https://vuejs.org/guide/reusability/composables.html)).

#### Composable: useAssets

<details>
  <summary><b>useAssets</b></summary>

The [useAssets](https://github.com/Terra-Cognita/Terra-Cognita.github.io/blob/main/src/composables/useAssets.js) composable provides a solution for _dynamic image src binding_ based on [static asset import](https://vitejs.dev/guide/assets.html).
Although this composable is not exactly _stateful_, it provides the project's assets _"state"_ of files, returning the resolved public URL of the registered files.\
 **Any asset to be used in component's biding should be registered to the composable.**
The usage in a component is as follows:

```
<template>
  <img :src="imgAsset">
</template>

<script>
  import { useAssets } from '@/composables/useAssets.js'
  export default {
    setup() {
      const { imgAsset } = useAssets()
      return { imgAsset }
    }
  }
</script>
```

</details>

### Project Components

The [./src/components/](https://github.com/Terra-Cognita/Terra-Cognita.github.io/tree/main/src/components) folder holds the `.vue` components' files of TC web application, each one encapsulating custom content and logic into an independent and reusable piece of code.\
This project's components are organized into four different classes:

#### Components: elements

<blockquote>
  
  The *Elements* are components that constitute the general [App view](https://github.com/Terra-Cognita/Terra-Cognita.github.io/blob/main/src/App.vue) (alongside the App's router-view).
  Exemple of *Elements* are: navbar, footer, and the chatbox.
</blockquote>

#### Components: frames

<blockquote>
  
  The *Frames* are components are the components that implement frame structures 
</blockquote>
  
#### Components: globalLayouts
<blockquote>
  
The *globalLayouts* are components that implement the basic design of TC webpage. 
They are [globally registered](https://vuejs.org/guide/components/registration.html#global-registration) to the Vue Application (see the [main.js](https://github.com/Terra-Cognita/Terra-Cognita.github.io/blob/main/src/main.js)), therefore being available to the templates of any component within this application without the need for local importing and registration.\
They should be used as the basic layout structure of the project's design, as they preserve the default configuration of general design.\
**All content is passed through [`<slot/>` content](https://vuejs.org/guide/components/slots.html).**\
The following *globalLayouts* are available:

<details>
  <summary><b>TcSection</b></summary>
  It is the basic TC layout, implementing the project's default padding setting.

Usage:

```
<tc-section>
  <!-- HTML content for the section  -->
</tc-section>
```

</details>

<details>
  <summary><b>TcHero</b></summary>
  Wraps a TcSection to provide full-height and backgound. The specific background should be provided as Tailwind class and further bg-config can also be provided.
  An image can be provided as Tailwind background through [theme customization](https://tailwindcss.com/docs/background-image#customizing-your-theme).

Usage:

```
<tc-hero class"bg-image (and further necessary config)">
  <!-- HTML content for the hero section  -->
</tc-hero>
```

</details>

<details>
  <summary><b>TcBreathing</b></summary>
  Wraps a TcSection to provide specific customization.

Usage:

```
<tc-breathing>
  <!-- Text content for the breathing section  -->
</tc-breathing>
```

</details>

<details>
  <summary><b>TcButton</b></summary>
  Implements the customized button of TC web project.

Usage:

```
<tc-button>
  <!-- Button message  -->
</tc-button>
```

</details>
</blockquote>

#### Components: layouts

<blockquote>
  
  The *Layouts* are components implementing different layout component structures to be used accross the project. They must be [locally registered](https://vuejs.org/guide/components/registration.html#local-registration) in the component where its use is required.\
  **The content of a *layout* component is provided through [props](https://vuejs.org/guide/components/props.html)**.

  <details>
    <summary><b>Usage example</b></summary>

    ```
    <tc-layout
      :propText="var-string"
      :propObject="var-object"
      :propFigure="imgAsset"
    >
    </tc-layout>
    ```

Obs.: _for better information on how to use image asset biding, see the section [Project Composables - Composable: useAssets](#project-composables)._

</details>
</blockquote>

### Project Sections & Pages

The [Sections](https://github.com/Terra-Cognita/Terra-Cognita.github.io/tree/main/src/sections) and [Pages](https://github.com/Terra-Cognita/Terra-Cognita.github.io/tree/main/src/pages) are higher level components that contain the actual content of the web application and implement the final design.

- The **Pages** are the actual [routes](https://github.com/Terra-Cognita/Terra-Cognita.github.io/blob/main/src/router/index.js) of the project.
  Each page comprise one or more _sections_.
- The **Sections** constitute the parts of a _page_. They should be implemented inside the [`<tc-section>` tag](#components-globallayouts) to preserve project's design settings.
  <br />

## STATUS AND ROADMAP

_This project is currently under a Proof of Concept phase._\
As Terra Cognita Game grows and consolidates, this web application project will be further developed in the direction of expanding its contents in addition to provide a private Login area for users to access the Game itself and its functionalities.

<br />

## AUTHORS AND ACKNOWLEDGEMENT

This repository is currently developed and mantained by

- [@jbmattos](https://github.com/jbmattos), Full stack developer.

Other members of TC team are:

- [@victorcorcino](https://github.com/victorcorcino) as Game creator and lead, general management & storyteller
- [@coire1](https://github.com/coire1) as Lead developer
- [@fhilipk](https://github.com/fhilipk) as Developer, technical consultant & storyteller
- [Felipe Marcel](https://www.behance.net/fmarcel) as Art director & designer
- [Marie Barrau]() as Music & Sound designer
  <br />

## SUPPORT

For any questions, comments or suggestions, Get in touch!

- terracognita1576@gmail.com
  <br />

## LICENSE

<!-- [MIT](https://choosealicense.com/licenses/mit/) -->
