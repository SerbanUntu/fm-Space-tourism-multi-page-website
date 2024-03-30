export default defineNuxtRouteMiddleware(async ( to, from ) => {

  const { path } = to

  const pages = {
    technology: [
      '/technology/capsule',
      '/technology/spaceport',
      '/technology/vehicle',
    ],
    destination: [
      '/destination/europa',
      '/destination/mars',
      '/destination/moon',
      '/destination/titan',
    ],
    crew: [
      '/crew/commander',
      '/crew/engineer',
      '/crew/pilot',
      '/crew/specialist',
    ]
  }
  if (path !== '/') {
    if (path.startsWith('/technology')) {
      if(!pages.technology.includes(path)) {
        return navigateTo('/technology/vehicle')
      }
    }

    if (path.startsWith('/destination')) {
      if(!pages.destination.includes(path)) {
        return navigateTo('/destination/moon')
      }
    }

    if (path.startsWith('/crew')) {
      if(!pages.crew.includes(path)) {
        return navigateTo('/crew/commander')
      }
    }

    if(!path.startsWith('/technology') && !path.startsWith('/destination') && !path.startsWith('/crew')) {
      return navigateTo('/')
    }
  }

  return
  
})
