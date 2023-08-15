function Sandbox() {

    let age:number;
    let name:string;
    let stringOrNumber: string|number;
    // ARRAY
    let names: (string|number)[];
    names = ['Joey','Monica'];
    names.push('Fatur');
    names.push(1);

    // OBJECT
    let userObj : {
        uname:string,
        age:number,
        isAdmin:boolean,
        phone?:number,
    }

    userObj = {
        uname:'Fatur',
        isAdmin:true,
        age:22,
        phone:85607880804
    }
    
    // ANY
    let types:any;
    types = 123+"abc"
    let anyarray: any[];
    anyarray = [1,'a',true];

    // FUNCTION
    let multiple = (num:number):number => {
        return num*2
    }

    let sum = (num1:number, num2:number, ...another:number[]):number => {
        let allnumb:number[];
        allnumb = [num1,num2,...another];
        return allnumb.reduce((previous,current)=>previous+current);
    }

    // TYPE ALIASES
    type userType = {
        username:string;
        age:number;
        phone?:string;
        theme:("dark"|"light")
    }

    const userWithType : userType = {
        username: 'Fatur',
        age:25,
        theme:'light',
    }

    // INTERFACE

    interface IUser{
        username:string;
        age:number;
        phone?:number;
    }

    interface IEmployee extends IUser {
        employeeID:number;
    }

    const employee:IEmployee = {
        employeeID:321,
        username:'nangin',
        age:22,
        phone:7489,
    }

    // GENERICS
    interface IPost <T> {
        id:number;
        title:string;
        desc:string;
        extra:T[];
    }

    const post:IPost<IEmployee> = {
        id:123,
        title:'Test',
        desc:'Desc',
        extra:[{employeeID:321,
                username:'nangin',
                age:22,
                phone:7489,}]
    }

    return (
        <div>Sandbox</div>
    )
}

export default Sandbox
