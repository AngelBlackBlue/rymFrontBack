const app = require('../src/app')
const session = require('supertest')
const agent = session(app);

const object = {
    "id": 1,
    "name": "Rick Sanchez",
    "gender": "Male",
    "species": "Human",
    "origin": "Earth (C-137)",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "status": "Alive"
}

const object2 = {
    "id": 23,
    "name": "Arcade Alien",
    "gender": "Male",
    "species": "Alien",
    "origin": "unknown",
    "image": "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
    "status": "unknown"
}

describe('Test de RUTAS', ()=>{ 

// Crea un describe con el mensaje 'GET /rickandmorty/character/:id'.
// PRIMER TEST:
// Crea un it con el mensaje 'Responde con status: 200'.En su callback pega el siguiente código:
// await agent.get('/rickandmorty/character/1').expect(200);

    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.status).toBe(200);
        })
        
//     SEGUNDO TEST:
// Crea un it con el mensaje 'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"'.
// Aquí tendrás que obtener la respuesta de esta ruta.Valida si en la propiedad body de la respuesta obtienes todas las propiedades correspondientes.
// [PISTA]: podrías validar esto con el métodos toHaveProperty.
      
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            
                const response = await agent.get('/rickandmorty/character/1');
                const character = response.body;
                expect(character).toHaveProperty('id');
                expect(character).toHaveProperty('name');
                expect(character).toHaveProperty('species');
                expect(character).toHaveProperty('gender');
                expect(character).toHaveProperty('status');
                expect(character).toHaveProperty('origin');
                expect(character).toHaveProperty('image');
           
        });
// TERCER TEST:
// Crea un it con el mensaje 'Si hay un error responde con status: 500'.Aquí tendrás que validar que este será el status si se ingresa un id que no existe para buscar al personaje.Es decir, tendrás que forzar el error.
        
        it('Si hay un error responde con status: 500', async () => {
            const response = await agent.get('/rickandmorty/character/1000');
            expect(response.status).toBe(500);
        })
    });

    describe('GET /rickandmorty/login', ()=>{
        it('Valida que, si ejecutas esta ruta pasándole la información de login (email y password) correctas', async()=>{
            const response = await agent.get('/rickandmorty/login?email=angel.blackblue@hotmail.com&password=angel123')
            expect(response.body).toEqual({ access: true })
        })
        it('Ahora tendrás que testear que en el caso de enviar la información incorrecta la porpiedad access sea false', async () => {
            const response = await agent.get('/rickandmorty/login?email=angel.blackblue@hotmail.com&password=angel12')
            expect(response.body).toEqual({ access: false })
        })
    })

    describe('POST /rickandmorty/fav', ()=> {
        it('Lo que envíes por body debe ser devuelto en un arreglo', async ()=>{
             const response = await agent.post('/rickandmorty/fav').send(object)
            expect(response.body).toEqual([object])
        })

        it('Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente', async () => {              
            const response = await agent.post('/rickandmorty/fav').send(object2)      
            expect(response.body).toEqual([object, object2])
        })
    })

    describe('DELETE /rickandmorty/fav/:id', ()=>{
        it('Primero deberás testear que lo que devuelva esta ruta, en el caso de que no haya ningún personaje con el ID que envías, sea un arreglo con los elementos previos sin modificar', async ()=>{
            const response = await agent.delete('/rickandmorty/fav/7')
            expect(response.body).toEqual([object, object2])
        })

        it('Luego debes testear que cuando envías un ID válido se elimine correctamente al personaje', async()=>{
            const response = await agent.delete('/rickandmorty/fav/23')
            expect(response.body).toEqual([object])

        })
    })   
})


