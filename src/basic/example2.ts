import {
  TPersonReq,
  Person,
  TPersonPick,
  TPersonNullish,
  Keys,
  TPersonExclude,
  TPersonExtract,
  TPersonParameters,
  TPersonReturn, 
  TPersonRecords
} from "../interfaces/personas";
import Animal from '../class/animal'

const Persona: TPersonPick = {
  age: 19,
  genre: "female",
  name: "",
};

const generoPersona: Person["genre"] = "male";
const name: TPersonNullish = 0;
const claves: Keys = "age";
const exc: TPersonExclude = "a";
const extract: TPersonExtract = "b";

const parameters: TPersonParameters = ["", 3];
const returnsOpt: TPersonReturn = '';

const Test = ():TPersonReturn => 'sdfa'

const personRecords: TPersonRecords = {
  "age": "",
  "birthday": "",
  "genre": "",
  identification: "",
  name: ""
}