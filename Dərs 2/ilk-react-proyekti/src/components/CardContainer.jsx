import React, { useState, useEffect } from 'react'
import Card from './Card'
const CardContainer = () => {
  // istifadəçi məlumatlarını saxlaya biləcəyimiz users state-ni yaradırıq.
  const [users, setUsers] = useState([]);
  // istifadəçi məlumatlarını kənar mənbədən gətirə bilmək üçün isə useEffect vasitəsi ilə apiyə fetch üsulu ilə müraciət edib gələn
  // api-dən qayıdan cavabı ilk növbədə json-a çevirir sonra isə datanı setUsers funksiyası ilə statemizə əlavə edirik 
  // APİ-də istifadəçi məlumatı data massivi içərisində users adlı obyektdə saxlanılıb
  useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(data => setUsers(data.users));
  }, []);

  return (
    <div className='card-container'>
      {/* Əgər istifadəçi məlumatları varsa - yəni uzunluq 0 -dan böyükdürsə bizə React Fraqmenti içərisində users üzərində dövr edib
          Card komponentini qaytar, YOX məlumat yoxdursa yəni uzunluq sıfırdırsa div içərisində Heç bir istifadəçi yoxdur sözünü qaytarırıq.
      */}
      {users.length ? (
        <>
          {
            users.map(user => (
              <Card
              key={user.id}
              image={user.image}
              firstName={user.firstName}
                lastName={user.lastName}
                city={user.address.city}
                title={user.company.title}
                email={user.email}
                phone={user.phone}
                gender={user.gender}
                />
                ))
              }
        </>
      ) : (<div>Heç bir istifadəçi yoxdur</div>)}
    </div>
  )
}
export default CardContainer