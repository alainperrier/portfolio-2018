/* eslint-disable */

export default ({ app }) => {
  /*
  ** Seulement exécuté côté client et en mode production
  */
  if (process.env.NODE_ENV !== 'production') return
  /*
  ** Inclusion du script Google Analytics
  */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  /*
  ** Affecter la page courante
  */
  ga('create', 'UA-117611291-1', 'auto')
  /*
  ** Chaque fois que la route change
  */
  app.router.afterEach((to, from) => {
    /*
    ** Nous expliquons à Google Analytics d'ajouter une `pageview`
    */
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
  })
}
