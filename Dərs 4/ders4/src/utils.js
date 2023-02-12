import routes from "./routes/routes";

export const url = path => {
    routes.map(route => {
        if(route?.name === path){
            console.log(route)
        }
    })
} 