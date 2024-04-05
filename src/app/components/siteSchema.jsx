import React from 'react'

const SiteSchema = () => {
  return (
    <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{__html:JSON.stringify({
        
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Tamjid Ahmed",
            "description": "I am a web developer, passionate about creating innovative and user-friendly websites.",
            "url": "https://tamjidahmed.com",
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKHW8UvKihTaQXue3o0UKafle3fy9GpFk9c2BLUo5BhPalnnkSqa8roRwaFX-hM4msy8oY18X7sctyLPoTpanrfx4YX7GgV7luQF_TnHTPCtp0bcKoaFJa8GxiG1zj_YqnkGcKVO83gUcQBFZB0sGbkAARUrO3zlCbdFpLG9NvrumQhSkyadb_JXvstg/s4032/IMG_20220712_152510.jpg",
            "jobTitle": "Web Developer",   
            "email": "contact@tamjidahmed.com",
            "sameAs": [
              "https://www.linkedin.com/in/tamjidahmedofficial",
              "https://github.com/tamjidahmed0",
              "https://twitter.com/tamjidahmed_bd"
            ]
          
          
    })}}
    >

    </script>
  )
}

export default SiteSchema