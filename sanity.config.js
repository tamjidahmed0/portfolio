'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

import { simplerColorInput } from 'sanity-plugin-simpler-color-input'
// import { iconPicker } from 'sanity-plugin-icon-picker';
import { iconify } from 'sanity-plugin-iconify';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    simplerColorInput({
      // Note: These are all optional
      defaultColorFormat: 'rgba',
      defaultColorList: [
        { label: 'Light', value: '#ffffff' },
        { label: 'Dark', value: '#333333' },
        { label: 'Brand', value: '#ca786d' },
        { label: 'Accent', value: '#626754' },
        { label: 'Custom...', value: 'custom' },
      ],
      enableSearch: true,
    }),


    iconify({
      // Optional configuration
  
      // Filter icons by collection for all Icon fields (this field has typed autocomplete ✨)
      // Defaults to empty array (all collections)
      
  
      // Shows the selected icon name and collection underneath the icon picker
      // Defaults to false
      showName: false,
    }),



    
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
