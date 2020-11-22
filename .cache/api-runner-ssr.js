var plugins = [{
      plugin: require('/home/imran/Documents/Personal/projects/northcoasttourism/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/imran/Documents/Personal/projects/northcoasttourism/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/imran/Documents/Personal/projects/northcoasttourism/node_modules/gatsby-plugin-google-gtag/gatsby-ssr'),
      options: {"plugins":[],"trackingIds":[null],"gtagConfig":{"anonymize_ip":true},"pluginConfig":{"head":true}},
    },{
      plugin: require('/home/imran/Documents/Personal/projects/northcoasttourism/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"WebSheets","short_name":"WebSheets","start_url":"/","background_color":"#049663","theme_color":"#049663","display":"standalone","icon":"static/app-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"610d68ef6f32551ea80acf011c515852"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
