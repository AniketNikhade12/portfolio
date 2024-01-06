import React from 'react'

const Education = () => {
  return (
    <div><h1 className="m-4 text-primary">Education </h1>
    <table class="table table-info">
  <thead>
    <tr>
      <th scope="col">Sr.no</th>
      <th scope="col">Name</th>
      <th scope="col">College</th>
      <th scope="col">Grades</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Aniketk</td>
      <td>Datta Meghe</td>
      <td>AA</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Aman</td>
      <td>Tirpude Collge</td>
      <td>AB</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Aditya</td>
      <td>Raisoni College</td>
      <td>AA</td>
    </tr>
  </tbody>
</table></div>
  )
}

export default Education