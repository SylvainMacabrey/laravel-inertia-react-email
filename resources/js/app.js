import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react';
import { render } from 'react-dom';
import {Layout} from "./Layout";
import { InertiaProgress } from '@inertiajs/progress';
import { AnimateSharedLayout } from "framer-motion";

InertiaProgress.init({
  delay: 250,
  color: '#29d',
  includeCSS: true,
  showSpinner: false,
})

const app = document.getElementById('app');

const layout = (page) => <Layout children={page} />

render(
  <AnimateSharedLayout>
    <InertiaApp
      initialPage={JSON.parse(app.dataset.page)}
      resolveComponent={name =>
        import(`./Pages/${name}`).then(module => {
          module.default.layout = layout
          return module.default
        })
      }
    />
  </AnimateSharedLayout>,
  app
)
