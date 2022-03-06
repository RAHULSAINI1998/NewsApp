import React from 'react'

const NewsItem =(props)=> {
 
    let {title,descripation,imageUrl,newsUrl,author,date} = props 
    return (
      <div className="my-3">
        <div className="card">
  <img src={!imageUrl?"https://www.cartoq.com/wp-content/uploads/2022/03/Jeep-Electric-SUV-featured.jpg":imageUrl} className="card-img-top" alt="..."/>
 
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{descripation}...</p>
    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
    <a  rel="noreferrer"  href={newsUrl} target="_blank" className="btn btn-sm btn-dark" >Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
