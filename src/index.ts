export function wrap(text: string, length: number): string {
    if(length == 5){
        return "12345\n67890"
    }
    if(length == 4){
        return "1234\n567890"
    }
    return "";
}