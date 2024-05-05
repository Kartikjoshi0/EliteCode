import axios from 'axios';
import { NextResponse } from 'next/server';
export async function GET(){
const options = {
  method: 'GET',
  url: 'https://judge0-ce.p.rapidapi.com/languages',
  headers: {
    'X-RapidAPI-Key': 'b8fcea08d9mshc5d8030eab22f49p1aa48cjsnd10e7633bbb1',
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
    console.log('get languages called ');
    if(!response){
        console.log("no response avaliable ");
        
      }
	console.log(response.data);
    return NextResponse.json(response.data)
} catch (error) {
	console.log(error);
}
}