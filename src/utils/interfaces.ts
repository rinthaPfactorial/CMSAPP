
export interface About {
  fullname: string
  designation: string
  email: string
  phone: number
  address: string
  description_heading: string
  description: string
  total_clients: number
  total_experience: number
  profileImage: string | Media;
  experience: Experience[]
  social_link: Social[]
}

interface Experience {
  start_date: string
  end_date: string
  role: string
  company: string
  order: number
}

interface Social {
  label: string
  link: string
}

export interface Media {
  relationTo: string
  required: boolean
}

export interface Service {
  service_name: string
  service_desc: string
  service_icon?: Media
  hover_img?: Media
  order: number
}

export interface Skill {
  enabled: boolean
  name: string
  sequence: number
  percentage: number
  image: Media
  _id: string
}

export interface Project {
  liveurl: string
  githuburl: string
  title: string
  sequence: number
  image: Image
  description: string
  techStack: string[]
  _id: string
  enabled: boolean
}

export interface Blog {
  liveurl: string
  githuburl: string
  title: string
  sequence: number
  image: Image
  description: string
  techStack: string[]
  _id: string
  enabled: boolean
}

export interface Image {
  public_id: string
  url: string
}

export interface SocialHandle {
  platform: string
  url: string
  image: Image
  enabled: boolean
  _id: string
}

export interface Testimonial {
  image: Image
  name: string
  review: string
  position: string
  enabled: boolean
  _id: string
}

export interface Timeline {
  company_name: string
  summary: string
  sequence: number
  startDate: string
  endDate: string
  jobTitle: string
  jobLocation: string
  bulletPoints: string[]
  forEducation: boolean
  enabled: boolean
  _id: string
}
