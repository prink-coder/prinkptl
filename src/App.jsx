import React from 'react'
import {Card2} from './Card2'
export const App = () => {

   const Company= [
  {
    "brandLogo": "data:image/png;base64,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",
    "companyName": "Google",
    "datePosted": "1 day ago",
    "post": "Senior Frontend Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$85/hour",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuJSmFKL-MOQoBKE8QC-ZGqTw7hgaD-In19i9UJPPTg&s=10",
    "companyName": "Microsoft",
    "datePosted": "3 days ago",
    "post": "Cloud Solutions Architect",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$90/hour",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "data:image/jpeg;base64,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",
    "companyName": "Meta",
    "datePosted": "5 days ago",
    "post": "Data Scientist",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$75/hour",
    "location": "Gurugram, India"
  },
  {
    "brandLogo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAACkCAMAAACTiiMGAAAAaVBMVEX///8AAAD8/Pzk5OT39/fy8vLZ2dnh4eGGhoaBgYExMTGnp6fq6uqysrK5ubmjo6OOjo5lZWV6enrGxsZYWFi/v78+Pj6cnJzT09MWFhZJSUkNDQ1eXl4nJyfMzMxERERvb28cHBxQUFA+ppTSAAAES0lEQVR4nO3caXOqMBQGYMO+CyIgsgj+/x95tZYWAhYo5xJOOc/HjjPNO2Qn4XAghBBCCCGEEEIIIYQQQgghAkiS6BKsTnLk0k52ltu52DljLFZFF2RNjntKGdtbbLdin277ia0ZaZOaXUUXZjXelbH9xbazVmoWiC7OOqQj67BFF2gddjd1Josu0CqibmpmiS7QKjQuNTuKLtEq7nzsXYzaCZ/aF12iNegFlzp1RBdpDSf+YXuiS7QG/calrnbRsn1+8NJEl2gNasA17FB0iVYRxp3UtSu6QOvoTsbTnUzGuabt7mQPTe0MX/to1w9yq0c776IP/6DnX6ntXYzXL1+xjV3MSBtylRaFFUStrkySFOWvvBaRVFnXQs+LNN1R2n/XS+37OSuOfHF9s6rMxLvoDvZar5d2ZTVt+O6H2lAgRS+Tc7tfvxnDP0SitDtpnvNu071w1ViP/CvrKYwI6bZa6Vv9OIxdfVf/+o3j+Xk29KuHAGMP7/jxmzisPhsfyZ3IDPidhrY0iESnmCvkqzdXh695ENwHa0ObZYrOMY/9rubOdRedZAaF30FYIFbG/982qL1NsiXuSGZxkgmZGs0WW2/3eykfQz33oFNbGMZvbXRUmulcIlidSKDd2YOJokdza9jURwzt+uBU40lmpRYdaJrjeJI/mFoOxqPMYKKo4dCD1xnJils1IFMXWDbPe+/pF8FSxXvnjhaJS9FxJlJA63glOs5U6tttpF8o0Lz4dQBTszuC9cdLCRkbz5lbyCkaotf8kLsqBZZ+fOAo5ZLYKNabHyA3GCwsc5XDATA1phPWFJtiU+w5sdFM0kBjF/r4/9sIyNg1nlfbkON2huf+xM9v8mfCsxQBfSFyRTM7Bd0kr9EswUC30thJdJypZNDYFpa+HHRTCc+GsQralbMaybUwyANKTzmSzhy2T0NTzXv3kpdKRCeaRIbcTXvKUOSGbtwMyfOGbtwPhuhME2gDB+KXyre/4QD7zvNTHG0+uPsfYj+m5+HGg2uwE7VGtvXj9MCnixuV6FwjPOgjpy9bvwQqwZ5M+7T9j8cl6XiK2ezNHzJW+e9rAMi2Xscf/sPQnSBYiak1dOoaxckG8PWIsfkO7UkBTm0hOXtqj0eZ44SgZT+poOuw+CI6z1QXyNhbn45/2+cdz4Fvgv0ekv7sJYK6yFyJTjILVDWPRQeZSc7HM43LUMzP2i4QC28k98DavOXNG8nLoK7FzTvHc0irbeEohmUu3lMvSZ2iuSPDUxZch8sQdmcN+X09zwrLsur3zxrFO7939MHhuzifjMSNIs/2zWDw8liB5njWMNngd1LTIPH0751QJzyeem0hx3JK6S3V61R0y496w5IaHjsr9CLBOXJ16W4zYSuMSBucgUh6mDQnIW62tvld8UkkR3N941G1f/rY3/OzgJ7thrLzN0K/SH/l246EEEIIIYQQQgghhBBCCCF4/AMoyTi7fnLHLwAAAABJRU5ErkJggg==",
    "companyName": "Apple",
    "datePosted": "1 week ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$80/hour",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMznz1zJ3fNTFggg26u-HrG1L7P1uQHJ4uqv7cishUA&s=10",
    "companyName": "Netflix",
    "datePosted": "2 days ago",
    "post": "UI/UX Designer",
    "tag1": "Remote",
    "tag2": "Senior Level",
    "pay": "$95/hour",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEIol3U7y_3K47dDhhZVPW7y7552KmSIjBZuHNrcyMNw&s",
    "companyName": "Adobe",
    "datePosted": "4 days ago",
    "post": "Full Stack Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$65/hour",
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mfB1u6IYMtfgOq2psXJs6x5QP6CDLEKEJ7rh5BkLuw&s=10",
    "companyName": "Uber",
    "datePosted": "Just now",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$70/hour",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpunUgf2FwwRgBsTqAw2B0KXeXuROKaPNgfAwyuuVLwg&s=10",
    "companyName": "Spotify",
    "datePosted": "6 days ago",
    "post": "Backend Engineer",
    "tag1": "Remote",
    "tag2": "Junior Level",
    "pay": "$45/hour",
    "location": "Remote, India"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIgp1fEs72LNzFwkLiLJXzbOVAo_K7qaz9t23OWdceQ&s=10",
    "companyName": "Salesforce",
    "datePosted": "2 weeks ago",
    "post": "QA Automation Engineer",
    "tag1": "Contract",
    "tag2": "Mid Level",
    "pay": "$55/hour",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRoE1H2uZqqQH4Toi-fSFwqtKWk8L5kUM3XRpT1NdhA&s=10",
    "companyName": "Atlassian",
    "datePosted": "3 weeks ago",
    "post": "Site Reliability Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$85/hour",
    "location": "Bengaluru, India"
  }
]

  return(
    <div className='parent'>
      {Company.map(function(elem){
        return <Card2 
        logo={elem.brandLogo}
        company={elem.companyName}
        date={elem.datePosted}
        post={elem.post} 
        tag1={elem.tag1}
        tag2={elem.tag2}
        pay={elem.pay}
        location={elem.location}
         />
      })}
    </div>
  )
}
