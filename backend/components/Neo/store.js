const neo4j = require('neo4j-driver')

const list = (categoria, multijugador, edad, plataforma) => {
  return new Promise((resolve, reject) => {
    let juegos = []

    if (categoria == 'Accion') {
      if (multijugador == 'Si') {
        if (plataforma == 'PC') {
          juegos.push({
            nombre: 'Call of duty',
            multijugador: 'Si',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/caratula-call-duty-black-ops-cold-war-2038143.png?itok=ywpD9uGS',
          })
          juegos.push({
            nombre: 'Overwatch',
            multijugador: 'Si',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg',
          })
        } else if (plataforma == 'PlayStation') {
          juegos.push({
            nombre: 'Call of duty',
            multijugador: 'Si',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/caratula-call-duty-black-ops-cold-war-2038143.png?itok=ywpD9uGS',
          })
          juegos.push({
            nombre: 'Overwatch',
            multijugador: 'Si',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg',
          })
        } else {
          juegos.push({
            nombre: 'Call of duty',
            multijugador: 'Si',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/caratula-call-duty-black-ops-cold-war-2038143.png?itok=ywpD9uGS',
          })
          juegos.push({
            nombre: 'Overwatch',
            multijugador: 'Si',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg',
          })
        }
      } else {
        if (plataforma == 'PC') {
          juegos.push({
            nombre: 'Counter Strike',
            multijugador: 'No',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://media.vandal.net/i/640x360/8-2018/201883119204_1.jpg',
          })
        } else if (plataforma == 'PlayStation') {
          juegos.push({
            nombre: 'Counter Strike',
            multijugador: 'No',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://media.vandal.net/i/640x360/8-2018/201883119204_1.jpg',
          })
        } else {
          juegos.push({
            nombre: 'Counter Strike',
            multijugador: 'No',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://media.vandal.net/i/640x360/8-2018/201883119204_1.jpg',
          })
        }
      }
    } else if (categoria == 'Terror') {
      if (multijugador == 'Si') {
        if (plataforma == 'PC') {
          juegos.push({
            nombre: 'Dead by DeadLight',
            multijugador: 'Si',
            categoria: 'Terror',
            plataforma: 'PC-Consolas',
            url: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DeadByDaylight_image1600w.jpg',
          })
        } else if (plataforma == 'PlayStation') {
          juegos.push({
            nombre: 'Dead by DeadLight',
            multijugador: 'Si',
            categoria: 'Terror',
            plataforma: 'PC-Consolas',
            url: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DeadByDaylight_image1600w.jpg',
          })
        } else {
          juegos.push({
            nombre: 'Dead by DeadLight',
            multijugador: 'Si',
            categoria: 'Terror',
            plataforma: 'PC-Consolas',
            url: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DeadByDaylight_image1600w.jpg',
          })
        }
      } else {
        if (plataforma == 'PC') {
          juegos.push({
            nombre: 'Resident Evil: Village',
            multijugador: 'No',
            categoria: 'Terror',
            plataforma: 'PC-Consolas',
            url: 'https://www.gamecored.com/wp-content/uploads/2020/06/resident-evil-village-8-frr-1620x800.jpg',
          })
          juegos.push({
            nombre: 'Outlast',
            multijugador: 'No',
            categoria: 'Terror',
            plataforma: 'PC-Consolas',
            url: 'https://depor.com/resizer/9L4-WgCs6cOVG7dpYmDJiaX2PTg=/1200x675/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VGTCCEFCLVERLDQFBNY7BLNKRA.jpg',
          })
        } else if (plataforma == 'PlayStation') {
          juegos.push({
            nombre: 'Resident Evil: Village',
            multijugador: 'No',
            categoria: 'Terror',
            plataforma: 'PC-Consolas',
            url: 'https://www.gamecored.com/wp-content/uploads/2020/06/resident-evil-village-8-frr-1620x800.jpg',
          })
          juegos.push({
            nombre: 'Outlast',
            multijugador: 'No',
            categoria: 'Terror',
            plataforma: 'PC-Consolas',
            url: 'https://depor.com/resizer/9L4-WgCs6cOVG7dpYmDJiaX2PTg=/1200x675/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VGTCCEFCLVERLDQFBNY7BLNKRA.jpg',
          })
        } else {
          juegos.push({
            nombre: 'Resident Evil: Village',
            multijugador: 'No',
            categoria: 'Terror',
            plataforma: 'PC-Consolas',
            url: 'https://www.gamecored.com/wp-content/uploads/2020/06/resident-evil-village-8-frr-1620x800.jpg',
          })
          juegos.push({
            nombre: 'Outlast',
            multijugador: 'No',
            categoria: 'Terror',
            plataforma: 'PC-Consolas',
            url: 'https://depor.com/resizer/9L4-WgCs6cOVG7dpYmDJiaX2PTg=/1200x675/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VGTCCEFCLVERLDQFBNY7BLNKRA.jpg',
          })
        }
      }
    } else if (categoria == 'Aventura') {
      if (multijugador == 'Si') {
        if (plataforma == 'PC') {
          juegos.push({
            nombre: 'Minecraft',
            multijugador: 'Si',
            categoria: 'Aventura',
            plataforma: 'PC-Consolas',
            url: 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/12a0ed7c6bc09b73d6558c6f69ed7f5f.png',
          })
          juegos.push({
            nombre: 'Subnautica',
            multijugador: 'Si',
            categoria: 'Aventura',
            plataforma: 'PC-Consolas',
            url: 'http://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Subnautica_image1280w.jpg',
          })
        } else if (plataforma == 'PlayStation') {
          juegos.push({
            nombre: 'Minecraft',
            multijugador: 'Si',
            categoria: 'Aventura',
            plataforma: 'PC-Consolas',
            url: 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/12a0ed7c6bc09b73d6558c6f69ed7f5f.png',
          })
          juegos.push({
            nombre: 'Subnautica',
            multijugador: 'Si',
            categoria: 'Aventura',
            plataforma: 'PC-Consolas',
            url: 'http://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Subnautica_image1280w.jpg',
          })
        } else {
          juegos.push({
            nombre: 'Minecraft',
            multijugador: 'Si',
            categoria: 'Aventura',
            plataforma: 'PC-Consolas',
            url: 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/12a0ed7c6bc09b73d6558c6f69ed7f5f.png',
          })
          juegos.push({
            nombre: 'Subnautica',
            multijugador: 'Si',
            categoria: 'Aventura',
            plataforma: 'PC-Consolas',
            url: 'http://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Subnautica_image1280w.jpg',
          })
        }
      } else {
        if (plataforma == 'PC') {
          juegos.push({
            nombre: 'ARK: Survival Evolved',
            multijugador: 'No',
            categoria: 'Aventura',
            plataforma: 'PC-Consolas',
            url: 'https://generacionxbox.com/wp-content/uploads/2017/08/ark-survival-evolved-analisis-portada-generacion-xbox.jpg',
          })
        } else if (plataforma == 'PlayStation') {
          juegos.push({
            nombre: 'ARK: Survival Evolved',
            multijugador: 'No',
            categoria: 'Aventura',
            plataforma: 'PC-Consolas',
            url: 'https://generacionxbox.com/wp-content/uploads/2017/08/ark-survival-evolved-analisis-portada-generacion-xbox.jpg',
          })
        } else {
          juegos.push({
            nombre: 'ARK: Survival Evolved',
            multijugador: 'No',
            categoria: 'Aventura',
            plataforma: 'PC-Consolas',
            url: 'https://generacionxbox.com/wp-content/uploads/2017/08/ark-survival-evolved-analisis-portada-generacion-xbox.jpg',
          })
        }
      }
    } else if (categoria == 'FPS') {
      if (multijugador == 'Si') {
        if (plataforma == 'PC') {
          juegos.push({
            nombre: 'Call of duty',
            multijugador: 'Si',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/caratula-call-duty-black-ops-cold-war-2038143.png?itok=ywpD9uGS',
          })
          juegos.push({
            nombre: 'Counter Strike',
            multijugador: 'Si',
            categoria: 'Accion',
            plataforma: 'PC',
            url: 'https://media.vandal.net/i/640x360/8-2018/201883119204_1.jpg',
          })
        } else if (plataforma == 'PlayStation') {
          juegos.push({
            nombre: 'Call of duty',
            multijugador: 'Si',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/caratula-call-duty-black-ops-cold-war-2038143.png?itok=ywpD9uGS',
          })
        } else {
          juegos.push({
            nombre: 'Call of duty',
            multijugador: 'Si',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/caratula-call-duty-black-ops-cold-war-2038143.png?itok=ywpD9uGS',
          })
        }
      } else {
        if (plataforma == 'PC') {
          juegos.push({
            nombre: 'Overwatch',
            multijugador: 'No',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg',
          })
        } else if (plataforma == 'PlayStation') {
          juegos.push({
            nombre: 'Overwatch',
            multijugador: 'No',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg',
          })
        } else {
          juegos.push({
            nombre: 'Overwatch',
            multijugador: 'No',
            categoria: 'Accion',
            plataforma: 'PC-Consolas',
            url: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg',
          })
        }
      }
    } else if (categoria == 'Historia') {
      if (multijugador == 'Si') {
        if (plataforma == 'PC') {
          juegos.push({
            nombre: 'The Legend of Zelda: Breathe of the Wild',
            multijugador: 'Si',
            categoria: 'Historia',
            plataforma: 'PC-Consolas',
            url: 'https://media.redadn.es/imagenes/the-legend-of-zelda-breath-of-the-wild-nintendo-switch-wii-u_289641.jpg',
          })
          juegos.push({
            nombre: 'Red Dead Redemption',
            multijugador: 'Si',
            categoria: 'Historia',
            plataforma: 'PC-Consolas',
            url: 'https://irrompibles.net/irrwp/wp-content/uploads/2018/12/images_2018_informes_red-dead-redemption-2_red-dead-redemption-2-review.jpg',
          })
        } else if (plataforma == 'PlayStation') {
          juegos.push({
            nombre: 'The Legend of Zelda: Breathe of the Wild',
            multijugador: 'Si',
            categoria: 'Historia',
            plataforma: 'PC-Consolas',
            url: 'https://media.redadn.es/imagenes/the-legend-of-zelda-breath-of-the-wild-nintendo-switch-wii-u_289641.jpg',
          })
          juegos.push({
            nombre: 'Red Dead Redemption',
            multijugador: 'Si',
            categoria: 'Historia',
            plataforma: 'PC-Consolas',
            url: 'https://irrompibles.net/irrwp/wp-content/uploads/2018/12/images_2018_informes_red-dead-redemption-2_red-dead-redemption-2-review.jpg',
          })
        } else {
          juegos.push({
            nombre: 'The Legend of Zelda: Breathe of the Wild',
            multijugador: 'Si',
            categoria: 'Historia',
            plataforma: 'PC-Consolas',
            url: 'https://media.redadn.es/imagenes/the-legend-of-zelda-breath-of-the-wild-nintendo-switch-wii-u_289641.jpg',
          })
          juegos.push({
            nombre: 'Red Dead Redemption',
            multijugador: 'Si',
            categoria: 'Historia',
            plataforma: 'PC-Consolas',
            url: 'https://irrompibles.net/irrwp/wp-content/uploads/2018/12/images_2018_informes_red-dead-redemption-2_red-dead-redemption-2-review.jpg',
          })
        }
      } else {
        if (plataforma == 'PC') {
          juegos.push({
            nombre: 'Final Fantasy',
            multijugador: 'No',
            categoria: 'Historia',
            plataforma: 'PC-Consolas',
            url: 'https://i.ytimg.com/vi/HjZ6O-g48hE/maxresdefault.jpg',
          })
        } else if (plataforma == 'PlayStation') {
          juegos.push({
            nombre: 'Final Fantasy',
            multijugador: 'No',
            categoria: 'Historia',
            plataforma: 'PC-Consolas',
            url: 'https://i.ytimg.com/vi/HjZ6O-g48hE/maxresdefault.jpg',
          })
        } else {
          juegos.push({
            nombre: 'Final Fantasy',
            multijugador: 'No',
            categoria: 'Historia',
            plataforma: 'PC-Consolas',
            url: 'https://i.ytimg.com/vi/HjZ6O-g48hE/maxresdefault.jpg',
          })
        }
      }
    }

    resolve(juegos)
  })
}

const save = (categoria, multijugador, edad, plataforma) => {
  return new Promise((resolve, reject) => {
    session
      .run(
        `CREATE (a:Game {name: $${categoria}, multijugador: $${multijugador}, edad: $${plataforma}, name: $${plataforma}}) RETURN a`,
      )
      .then(result => {
        resolve('Good!')
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = {
  list,
  save,
}
