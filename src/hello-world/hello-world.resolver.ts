import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

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
    getNumberRandomFromZeroTo( @Args('to', { nullable: true, type: () => Int } ) to: number = 6 ):number {
        return Math.floor(Math.random() * to);
    }
}
