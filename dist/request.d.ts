interface RequestObj {
    url: string;
    method: 'get' | 'post' | 'delete' | 'put';
}
export default function (obj: RequestObj): (_target: any, _name: any, descriptor: any) => void;
export {};
