
export interface Course {
 id : number;
 title : string;
 description: string;
 instructor : string;
 image : string;
}
export interface User {
    id : number;
    username : string;
    isLearner : boolean;
    email : string;
}