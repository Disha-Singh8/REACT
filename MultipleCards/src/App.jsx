import Card from './Components/Card'

let App = ()=>{
  const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 60,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.jpg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://png.pngtree.com/element_our/sm/20180627/sm_5b334610deb59.jpg",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Cloud Solutions Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 65,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiIhqfGDNjZFNlpRz9n9PF7nZyBaDObflyA&s",
    companyName: "Netflix",
    datePosted: "10 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Pune, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-photo/twitter-logo_1080029-97.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Twitter",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/round-linkedin-logo-isolated-white-background_469489-985.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "LinkedIn",
    datePosted: "1 month ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Intel_Core_2023_logo.png",
    companyName: "Intel",
    datePosted: "6 days ago",
    post: "Hardware Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfnCVpVPUW5XUjxV8KA6RPE80wowio-7BUw&s",
    companyName: "Snap Inc.",
    datePosted: "3 weeks ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Bangalore, India"
  }
];
  return(
    
      <div className = 'parent'>
        {
          jobOpenings.map((elem, idx) =>{
            return <div key = {idx}><Card company ={elem.companyName} logo ={elem.brandLogo} dateposted ={elem.datePosted} loca ={elem.location} post ={elem.post}
            tag1 = {elem.tag1} tag2 = {elem.tag2} pay ={elem.pay} /></div>
          })
        }
      </div>
  
  )
}
export default App
