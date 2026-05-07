export interface ProfileResponse {
  id: string
  name: string
  type: string
  is_plus: boolean
  online_status: string
  preview_pic: PreviewPic
  headline: string
  last_login: string
  location: Location
  personal: Personal
  service: Service
  sexual: Sexual
  telephone: string
  pictures: Picture[]
  reviews: Review[]
  travel_locations: any[]
  social_links: any[]
  is_public: boolean
  is_new: boolean
  creation_date: string
}

export interface PreviewPic {
  id: string
  owner_id: string
  url_token: string
  width: number
  height: number
  rating: string
  comment: string
  is_public: boolean
}

export interface Location {
  name: string
  country: string
  sensor: boolean
  is_base_profile: boolean
}

export interface Personal {
  profile_text: string
  height: number
  weight: number
  target_age: TargetAge
  spoken_languages: string[]
  beard: string
  body_hair: string
  body_type: string
  ethnicity: string
  eye_color: string
  hair_length: string
  hair_color: string
  orientation: string
  smoker: string
  piercing: string
  tattoo: string
  gender_orientation: GenderOrientation
  age: number
}

export interface TargetAge {
  min: number
  max: number
}

export interface GenderOrientation {
  gender: string
  orientation: string
  looking_for_gender: string[]
  looking_for_orientation: string[]
}

export interface Service {
  rate_hour: number
  rate_night: number
  currency: string
  service_locations: string[]
  service_offerings: any[]
}

export interface Sexual {
  enabled: boolean
  favored_position: string
  anal_position: string
  dick_size: string
  concision: string
  dirty_sex: string
  sm: string
  fisting: string
  fetish: string[]
  safer_sex: string
  kissing: string
  oral: string
}

export interface Picture {
  id: string
  owner_id: string
  url_token: string
  width: number
  height: number
  rating: string
  comment?: string
  is_public: boolean
}

export interface Review {
  id: string
  comment: string
  updated_at: string
  is_reviewer_genuine: boolean
  vote?: number
  reply?: Reply
  is_reported: boolean
  reviewer_id?: string
  reviewer_name?: string
}

export interface Reply {
  id: number
  review_id: number
  text: string
  updated_at: string
}
