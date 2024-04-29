var myName: string = 'captain';

var age: number = 100;

var isLogin: boolean = false;

var hero: object = { name: 'captain', age: 100 };

var companies: Array<string> = ['네이버', '삼성', '인프런'];
var companies: string[] = ['네이버', '삼성', '인프런'];
var cards: Array<number> = [13, 7, 2, 4];
var cards: number[] = [13, 7, 2, 4];

// tuple 튜플
var items: [string, number] = ['hi', 11];

var maName: any = '캡틴';
maName = 100;
var maAge: any = 29;

var empty: null = null;
var nothingAssigned: undefined;

function sayHi() {
    return 'hi';
}

function sayWord(word: string) {
    return word;
}

sayWord('hello');

// ?: 옵셔널 파라미터
// (인자 타입)
function sayMyName(firstName: string, lastName?: string): string {
    return 'my name' + firstName + ' ' + lastName;
}

sayMyName('captain', 'Pangyo');

sayMyName('captain');
