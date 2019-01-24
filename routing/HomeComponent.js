export const HomeComponent = {
    // state
    data () {
        return {
            data: {
                counter: 0
            }
        }
    },
    // actions
    methods: {
        increment () {
            this.data.counter++
        }
    },
    // view
    template: `
        <div>
            {{ data.counter }} 
            <button @click="increment()"> + </button>
        </div>
    `

}