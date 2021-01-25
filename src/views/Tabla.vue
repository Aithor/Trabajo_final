<template>
<div>
  <h1 class="pb-2">Ranking de los animales más inteligentes</h1>
   <p>A continuación se muestra el ranking de los animales más inteligentes del mundo<p>

    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th scope="col">Rank</th>
            <th scope="col">Animales</th>
            <th scope="col">Peso</th>
            <th scope="col">Altura</th>
            <th scope="col">Descripción</th>
            <th scope="col">N.Científico</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="currency in info" :key="currency.id" class="currency">
            <th scope="row">
                {{ repositories.indexOf(currency) + 1 }}
            </th>
            <td>
                {{ currency.code }}
            </td>
            <td>
                 {{ currency.symbol }}
            </td>
            <td>
                 {{ currency.rate }}
            </td>
            <td>
                 {{ currency.description }}
            </td>
            <td>
                 {{ currency.rate_float }}
            </td>
        </tr>
        </tbody>
    </table>


        <!-- <Tabla :showRepos="showRepos" :repositories="repositories"/> -->
<!-- PAGINACION -->
        <div v-if="loading" class="justify-content-center">
            <icons :icon="['fas', 'spinner']" class="fa-spinner"/>
        </div>

        <div class="my-4">
            <ul class="pagination pagination-md justify-content-center text-center">
                <li class="page-item" :class="page === 1 ? 'disabled' : ''">
                    <a
                            class="page-link"
                            @click="prevPage"
                    >
                        Previous
                    </a>
                </li>
                <li class="page-link" style="background-color: inherit">
                    {{ page }} of {{ lastPage }}
                </li>
                <li class="page-item" :class="page === lastPage ? 'disabled' : ''">
                    <a class="page-link"
                       @click="nextPage"
                    >
                        Next
                    </a>
                </li>
            </ul>
        </div><!--./Pagination -->
        </div>
</template>

<script>
import axios from 'axios';
const githubAPI = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  
  export default {
  props: {  
    name: {
        type: String,
        default: 'Tabla'
      }
    },
    data() {
      return {
        githubPage: 1,
        repositories: [],
        page: 1,
        loading: false,
        perPage: 5
      }
    },
    mounted() {
      this.fetchData()
    },
    computed: {
      showRepos() {
        let start = (this.page - 1) * this.perPage;
        let end = start + this.perPage;
        return this.repositories.slice(start, end);
      },
      lastPage() {
        let length = this.repositories.length;
        return length / this.perPage;
      }
    },
    methods: {
      fetchData() {
        this.loading = true;
        axios.get(githubAPI + this.githubPage)
          .then(({data}) => {
            this.repositories = this.repositories.concat(data.items);
            this.loading = false;
          })
          .catch((err) => {
            throw err;
          })
      },
      prevPage() {
        this.page--;
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
      nextPage() {
        if (this.page == this.lastPage - 1) {
          this.githubPage++;
          this.fetchData();
        }
        this.page++;
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    }
  }
</script>
 

<style>
    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
    }
    .fa-spinner {
        animation: spinner 1s linear infinite;
    }
    a:hover {
        cursor: pointer;
    }
    
    .avatar {
        max-width: 50px;
    }
</style>