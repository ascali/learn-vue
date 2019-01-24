export const BookComponent = {
          data () {
              return {
                  classCard: 'card',
                  classCardBody: 'card-body'
              }
          },
          props: [ 'book' ],
          // props: [ 'title', 'description', 'image' ],
          template : `
              <div class="col-md-3">
                <div :class="classCard">
                  <div :class="classCardBody">
                        <h3>{{ book.title }}</h3>
                        <img :src="book.image" style="width:10%">
                        <p v-html="book.description"></p>
                        <button @click="$emit('selected', book.title)"> Select </button>
                  </div>
                </div>
              </div>
          `
      }