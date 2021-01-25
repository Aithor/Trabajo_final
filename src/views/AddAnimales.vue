<template>
<div class="container">

    <h1 class="pb-2">Formulario para añadir animales</h1>
    <p> Añade tus animales favoritos </p>

        
<!-- Formulario para añadir Animales -->

        <section class="form">
            <form action="" class="text-center">
                <input v-model="nombre" @keyup.enter="crearAnimal" type="text" class="form-control" placeholder="Nombre">
                <select v-model="alimento" @keyup.enter="crearAnimal" class="form-control" placeholder="Alimento">
                <option disabled value="">Seleccione la alimentacion</option>
                <option>Carnivoro</option>
                <option>Herbívoro</option>
                <option>Omnívoro</option>
                </select>
                <input v-model="habitat" @keyup.enter="crearAnimal" type="text" class="form-control" placeholder="Habitat">
                <input v-model="edad" @keyup.enter="crearAnimal" type="number" name="edad" placeholder="Edad" class="form-control">
                
                <!-- Botón para añadir -->
                <input @click="crearAnimal" type="button" value="Añadir" class="btn btn-success">
            </form>
        </section>
        
<!-- Tabla donde se muestran los datos -->
        <section class="data">
            <caption>animal</caption>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Alimento</th>
                        <th scope="col">Habitat</th>
                        <th scope="col">Edad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(animal, index) in animal" :key="animal.id">
                        <td>{{ animal.id }}</td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="nombreActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                
                                <!-- Dato nombre -->
                                {{ animal.nombre }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="alimentoActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                
                                <!-- Dato alimento -->
                                {{ animal.alimento }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="habitatActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                
                                <!-- Dato habitat -->
                                {{ animal.habitat }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="edadActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato edad -->
                                {{ animal.edad }}
                            </span>
                        </td>
                        <td>
                            
                            <!-- Botón para guardar la información actualizada -->
                            <span v-if="formActualizar && idActualizar == index">
                                <button @click="guardarActualizacion(index)" class="btn btn-success">Guardar</button>
                            </span>
                            <span v-else>
                                
                                <!-- Botón para mostrar el formulario de actualizar -->
                                <button @click="verFormActualizar(index)" class="btn btn-warning">Actualizar</button>

                                <!-- Botón para borrar -->
                                <button @click="borrarAnimal(index)" class="btn btn-danger">Borrar</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <br><br><br>
    </div>
</template>




    <script>
    export default {
        data() {
        return {
            // Input nombre
            nombre: '',
            // Input alimento
            alimento: '',
            // Input habitat
            habitat: '',
            // Input edad
            edad: '',
            // Ver o no ver el formulario de actualizar
            formActualizar: false,
            // La posición de tu lista donde te gustaría actualizar 
            idActualizar: -1,
            // Input nombre dentro del formulario de actualizar
            nombreActualizar: '',
            // Input edad dentro del formulario de actualizar
            edadActualizar: '',
            // Lista de animales
            animal: [] 

    }
         
    },
        methods: {
            crearAnimal: function () {
                
                // Anyadimos a nuestra lista
                this.animal.push({
                    id: + new Date(),
                    nombre: this.nombre,
                    alimento: this.alimento,
                    habitat: this.habitat,
                    edad: this.edad
                });
                
                // Vaciamos el formulario de añadir
                this.nombre = '';
                this.alimento = '';
                this.habitat = '';
                this.edad = '';
            },
            verFormActualizar: function (animal_id) {
                
                // Antes de mostrar el formulario de actualizar, rellenamos sus campos
                this.idActualizar = animal_id;
                this.nombreActualizar = this.animal[animal_id].nombre;
                this.alimentoActualizar = this.animal[animal_id].alimento;
                this.habiitatActualizar = this.animal[animal_id].habitat;
                this.edadActualizar = this.animal[animal_id].edad;
                
                // Mostramos el formulario
                this.formActualizar = true;
            },
            borrarAnimal: function (animal_id) {
                
                // Borramos de la lista
                this.animal.splice(animal_id, 1);
            },
            guardarActualizacion: function (animal_id) {
                // Ocultamos nuestro formulario de actualizar
                this.formActualizar = false;

                // Actualizamos los datos
                this.animal[animal_id].nombre = this.nombreActualizar;
                this.animal[animal_id].alimento = this.alimentoActualizar;
                this.animal[animal_id].habitat = this.habitatActualizar;
                this.animal[animal_id].edad = this.edadActualizar;
            }
        }

    }
</script>