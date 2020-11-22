module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":[null],"gtagConfig":{"anonymize_ip":true},"pluginConfig":{"head":true}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"WebSheets","short_name":"WebSheets","start_url":"/","background_color":"#049663","theme_color":"#049663","display":"standalone","icon":"static/app-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"610d68ef6f32551ea80acf011c515852"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
