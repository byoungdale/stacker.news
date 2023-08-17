// import models from '../models'
// import SDK, { SlashURL } from '@synonymdev/slashtags-sdk'
// import { Server } from '@synonymdev/slashtags-auth'

// const HOUR = 1000 * 60 * 60

// async function createProfile (sdk, slashtag) {
//   const publicDrive = slashtag.drivestore.get()
//   await sdk.swarm.flush()
//   await publicDrive.ready()
//   const exists = await publicDrive.get('/profile.json')
//   if (!exists) {
//     await publicDrive.put('/profile.json', Buffer.from(JSON.stringify({
//       name: 'Stacker News',
//       image: 'data:image/jpeg;base64,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',
//       bio: "It's like Hacker News but we pay you Bitcoin"
//     })))
//   }
// }

// async function initSlashtags () {
//   try {
//     console.log('initing slashtags')
//     const sdk = new SDK({
//       primaryKey: process.env.SLASHTAGS_SECRET ? Buffer.from(process.env.SLASHTAGS_SECRET, 'hex') : undefined
//     })

//     // Get the default slashtag
//     const slashtag = await sdk.slashtag()

//     await createProfile(sdk, slashtag)

//     const server = new Server(slashtag, {
//       onauthz: async (token, remote) => {
//         const user = SlashURL.format(remote)
//         console.log('Got session', token, 'from:', user)

//         const auth = await models.lnAuth.findUnique({ where: { k1: token } })
//         if (!auth || auth.pubkey || auth.createdAt < Date.now() - HOUR) {
//           console.log('Got invalid session', token, 'from:', user)
//           return { status: 'error', message: 'token expired' }
//         }

//         console.log('Got valid session', token, 'from:', user)
//         await models.lnAuth.update({ where: { k1: token }, data: { pubkey: SlashURL.parse(user).id } })
//         return { status: 'ok' }
//       },
//       onmagiclink: () => {
//         return {
//           url: 'https://stacker.news',
//           validUntil: Number(new Date()) + 15 * 60 * 60
//         }
//       }
//     })

//     await slashtag.listen()

//     return server
//   } catch (e) {
//     console.log(e)
//     return null
//   }
// }

// const slashtags = global.slashtags || await initSlashtags()

// if (process.env.NODE_ENV === 'development') global.slashtags = slashtags

// export default slashtags

// // server.formatURL(token) is what the user scans!
