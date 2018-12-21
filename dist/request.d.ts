interface RequestObj {
    url: string;
    method: 'get' | 'post' | 'delete' | 'put';
}
export default function (obj: RequestObj): (target: any, name: any, descriptor: any) => void;
export {};
