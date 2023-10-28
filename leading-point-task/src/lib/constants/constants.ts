// Types
type BadgeNameAndColor = {
  [key: string]: {
    label: string;
    color: string;
    fontColor?: string;
  };
};

export const imagePaths: { img: string; title: string }[] = [
    {img:'img/img1.png', title:"Bosto family home"},
    {img:'img/img2.png', title:'Miami brach house'},
    {img:'img/img3.png', title:"New York Townhouse"},
    {img:'img/img4.png', title:"Beachfront Mansion Miami"},
    {img:'img/img5.png',title:"Hamptons Villa"},
    {img:'img/img6.png', title:"San Fransisco Condo"}
  ];


export const BADGE_NAME_AND_COLOR:BadgeNameAndColor = {
    CANCELLED : {label :"Cancelled", color:'var(--color-red-6)', fontColor:'var(--color-white)'},
    IN_REVIEW : {label :"In review", color:'var(--color-yellow-6)', fontColor:'var(--color-white)'},
    IN_PROGRESS : {label :"In progress", color:'var(--color-blue-10)', fontColor:'var(--color-white)'},
    APPROVED : {label :"Approved", color:'var(--color-green-6)', fontColor:'var(--color-white)'},
    NEW_BUILD:{label : 'New build', color:'var(--color-green-7)', fontColor:"var(--color-green-8)"},
    RECONSTRUCTION:{label : 'Reconstruction', color:'var(--color-red-7)', fontColor:"var(--color-red-8)"},
    COMMERCIAL:{label : 'Commercial', color:'var(--color-yellow-7)', fontColor:"var(--color-yellow-8)"},
    RESIDENTIAL:{label : 'Residential', color:'var(--color-blue-12)', fontColor:'var(--color-blue-13)'}
}


export const FILTER_BUTTONS: Record<string, { name: string; icon: string }>   = {
  FILTER_PROJECTS: { name: "Filter projects", icon: 'filterProject.svg'},
  SORT_PROJECTS: { name: "Sort projects", icon: 'sort.svg'},

}

export const ANOTHER_FILTER_BUTTONS: Record<string, { name: string; icon: string }>  = {
  REFRESH: { name: "Refresh", icon: 'refresh.svg'},
  CUSTOMIZE: { name: "Customize", icon: 'settings.svg'},
  MORE: { name: "", icon: 'more.svg'},
}


