import axios from "axios"
import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"

function App() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

 async function generateAnswer(){
  setAnswer("Generating...")
 const res = await axios({
      url:'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyA-K_HVoAFfMlcnHkxH7KzPzokSs46qXws',
      method: "post",
      data:{
        contents: [
           {parts: [{text: question}]},
    ],
  }
  });
setAnswer(res['data']['candidates'][0]['content']['parts'][0]['text'])
}

  return (
    <div className="container py-5" style={{width: "80vw"}}>
      <div className="row justify-content-center">
        <div className="col-md-8" style={{width: "80vw"}}>
          <div className="card shadow">
            <div className="card-body">
              <h1 className="card-title text-center mb-4 fw-bold" style={{
                fontSize: "2.5rem",
                letterSpacing: "2px",
                textShadow: "2px 2px 8px #b3c6ff",
                background: "linear-gradient(90deg, #0d6efd 0%, #6f42c1 50%, #20c997 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                borderBottom: "3px solid #0d6efd",
                paddingBottom: "6px"
              }}>
                Gautam AI<span style={{textShadow:"none" ,color:"none"}}>🤖</span>Chat-Bot
              </h1>
              <textarea 
                className="form-control mb-3" 
                value={question} 
                onChange={(e)=>setQuestion(e.target.value)} 
                cols={40} 
                rows={6} 
                placeholder="Type your question..."
              ></textarea>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary px-4" onClick={generateAnswer}>Generate</button>
              </div>
              <div 
                className="alert alert-info p-3 mt-2 d-flex align-items-start gap-2" 
                role="alert" 
                style={{
                  background: "linear-gradient(90deg, #e3f2fd 0%, #f3e8ff 100%)",
                  border: "2px solid",
                  borderImage: "linear-gradient(90deg, #0d6efd 0%, #6f42c1 100%) 1",
                  borderRadius: "1rem",
                  boxShadow: "0 2px 12px rgba(13,110,253,0.08)",
                  color: "#212529",
                  fontSize: "1.15rem",
                  fontFamily: "monospace",
                  whiteSpace: "pre-wrap"
                }}
              >
                <span style={{fontSize: "1.7rem", marginRight: "8px", color: "#0d6efd"}} aria-label="answer-symbol">💬</span>
                <span>{answer}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
