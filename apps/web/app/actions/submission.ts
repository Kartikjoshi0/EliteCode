import { TestCases } from "@prisma/client";
import axios from "axios";


export async function submitCode(code: string, language_id: string,testCases: TestCases[]){ 
  const submissions = testCases.map(testCase => ({
    language_id: language_id,
    source_code: code,
    stdin: testCase.inputs.join(' '),
    expected_output: testCase.expectedOutput + '\n'
  }));

  
 
  
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
        params: {
          base64_encoded: 'true',
          fields: '*'
        },
        headers: {
          'content-type': 'application/json',
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'b8fcea08d9mshc5d8030eab22f49p1aa48cjsnd10e7633bbb1',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        data:{
          submissions: submissions.map(submission => ({
            language_id: submission.language_id,
            source_code: btoa(submission.source_code),
            stdin: btoa(submission.stdin),
            expected_output: btoa(submission.expected_output)
          })) 
      }
      };
      
      try {
          const response = await axios.request(options);
          console.log('this is inputs',{msg: testCases[0].inputs.join(' ')});
          if(response){
            console.log('this is ur code ',code);
            console.log('ok response is  ',response);

            console.log('ok response is created token  ',response.data);
          }
          
          if(!response){
            console.log("no response avaliable ");
            
          }
          console.log('updaetd token ',response.data.map(token => token.token).join(','));
          const token=response.data.map(token => token.token).join(',')
          
          return token
           
      } catch (error) {
          console.log('this is error bc',error);
      }
}
export async function getResult(token: string){
  
    const options = {
        method: 'GET',
        url: `https://judge0-ce.p.rapidapi.com/submissions/batch`,
        params: {
          tokens: token,
          base64_encoded: 'true',
          fields: '*'
        },
        headers: {
          'X-RapidAPI-Key': 'b8fcea08d9mshc5d8030eab22f49p1aa48cjsnd10e7633bbb1',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log('get called  response',response);
          if(!response){
              console.log("no response avaliable ");
              
            }
            const data=response.data.submissions;
            for(const submission of data){
              if(submission.status.description != 'Accepted'){
                return ({msg: submission.status.description})
              }
            }
          console.log('accepted');
          
          return {msg: 'Acccepted'}
      
      } catch (error) {
          console.error(error);
      }
}