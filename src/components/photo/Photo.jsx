import React, { useEffect } from 'react'

const Photo = () => {
    const Photo = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")       // fetch Data
        .then((response) =>response.json ())       // coveting response to JSON
        .then((info) => (console.log(info)))      // console-log data
        .catch((error) =>console.log(error))      // catching error
    }

    useEffect(() =>{
        Photo()
    }, [])

  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center">
      {
      BankData.map((p,index) => (
        
        <div key={index} class="card" style={{ width: "15rem" }}>
          <img src={p.logo} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{p.name}</h5>
            <p class="card-text">
            {p.code}
            </p>
            <a href="#" class="btn btn-primary w-100">
              Go somewhere
            </a>
          </div>
        </div>
      ))
      }
    </div>

  )
}

export default Photo