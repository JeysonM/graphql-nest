import { Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
    @Query( ()=> String, {description: "retorna hola mundo", name: "hola"} )
    helloWorld():string {
        return 'Hello World';
    }

    @Query( ()=> Float, {description: "random number"} )
    getNumberRandom():number {
        return Math.random() * 100;
    }
    
    @Query( ()=> Int, {description: "random del 0 al 10", name: 'randomFromZeroTo'})
    getNumberRandomFromZeroTo():number {
        return Math.floor(Math.random() * 10);
    }
}
