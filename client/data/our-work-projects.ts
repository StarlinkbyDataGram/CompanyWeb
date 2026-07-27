export interface Project {
  id: string;
  displayName: string;
  folder: string;
  photoCount: number;
  location: string;
  state: string;
  category: 'maritime' | 'enterprise' | 'government' | 'residential';
  tags: string[];
  description: string;
  altTexts: string[];
  internalLink: { label: string; href: string };
  imageFiles: string[];
}

const imageFilesFor = (folder: string): string[] => {
  const filesByFolder: Record<string, string[]> = {
    'hp-kit--naval-vessel--sagbama': ['photo-1.jpeg'],
    'hp-kit--houseboat--warri': ['photo-1.jpeg', 'photo-2.jpeg', 'photo-3.jpeg'],
    'hp-kit--enterprise--degema': ['photo-1.jpeg', 'photo-2.jpeg', 'photo-3.jpeg', 'photo-4.jpeg'],
    'hp-kit--enterprise--enval': ['photo-1.jpeg', 'photo-2.jpeg'],
    'standard--government-office--rivers': ['photo-1.jpeg'],
    'hp-kit--enterprise-houseboat--mixed': ['photo-1.jpeg'],
    'mini--outdoor-business': [],
    'standard--residential--arochukwu': [],
    'standard--residential--duplex-4bed': [],
  };

  return filesByFolder[folder] ?? [];
};

export const ourWorkProjects: Project[] = [
  {
    id: 'hp-kit--naval-vessel--sagbama',
    displayName: 'Nigeria Navy Ship — NNS Sagbama',
    folder: 'hp-kit--naval-vessel--sagbama',
    photoCount: 1,
    location: 'Sagbama',
    state: 'Bayelsa State',
    category: 'maritime',
    tags: ['High Performance Kit', 'Naval'],
    description: 'Starlink High Performance installation aboard NNS Sagbama, a Nigerian Navy vessel. Full connectivity setup for operational communications on a commissioned naval ship.',
    altTexts: [
      'Starlink High Performance dish installed on Nigeria Navy Ship NNS Sagbama in Bayelsa State by DataGram',
    ],
    internalLink: {
      label: 'See our Maritime & Offshore page',
      href: '/starlink-offshore-maritime-installation',
    },
    imageFiles: imageFilesFor('hp-kit--naval-vessel--sagbama'),
  },
  {
    id: 'hp-kit--houseboat--warri',
    displayName: 'Houseboat Installation — Warri, Delta State',
    folder: 'hp-kit--houseboat--warri',
    photoCount: 3,
    location: 'Warri',
    state: 'Delta State',
    category: 'maritime',
    tags: ['High Performance Kit', 'Mesh WiFi'],
    description: 'Starlink High Performance Kit deployed on a houseboat in Warri, Delta State. Includes full WiFi distribution across the vessel for residential use on the water.',
    altTexts: [
      'Starlink High Performance dish mounted on houseboat in Warri Delta State by DataGram',
      'Starlink cable routing and WiFi setup inside houseboat Warri Delta State',
      'DataGram technician completing Starlink installation on Delta State houseboat',
    ],
    internalLink: {
      label: 'See our Boat Installation page',
      href: '/starlink-boat-installation',
    },
    imageFiles: imageFilesFor('hp-kit--houseboat--warri'),
  },
  {
    id: 'hp-kit--enterprise--degema',
    displayName: 'Royal Fouche Enterprise — Degema, Rivers State',
    folder: 'hp-kit--enterprise--degema',
    photoCount: 4,
    location: 'Degema',
    state: 'Rivers State',
    category: 'enterprise',
    tags: ['High Performance Kit', 'Mesh WiFi'],
    description: 'Full enterprise Starlink deployment for Royal Fouche at their Degema facility in Rivers State. Network configuration and WiFi distribution across the premises.',
    altTexts: [
      'Starlink High Performance enterprise installation at Royal Fouche Degema Rivers State by DataGram',
      'Starlink dish mounted at Royal Fouche enterprise facility Degema Rivers State',
      'DataGram enterprise network setup at Royal Fouche Degema Rivers State',
      'Completed Starlink enterprise deployment at Royal Fouche Degema Rivers State',
    ],
    internalLink: {
      label: 'See our Enterprise page',
      href: '/starlink-enterprise-nigeria',
    },
    imageFiles: imageFilesFor('hp-kit--enterprise--degema'),
  },
  {
    id: 'hp-kit--enterprise--enval',
    displayName: 'Enval Nigeria Ltd — Enterprise Deployment',
    folder: 'hp-kit--enterprise--enval',
    photoCount: 2,
    location: 'Nigeria',
    state: 'Enterprise',
    category: 'enterprise',
    tags: ['High Performance Kit'],
    description: 'Starlink High Performance Kit installed for Enval Nigeria Ltd. Enterprise-grade connectivity setup for business operations.',
    altTexts: [
      'Starlink High Performance enterprise installation at Enval Nigeria Ltd by DataGram',
      'DataGram Starlink setup completed at Enval Nigeria enterprise facility',
    ],
    internalLink: {
      label: 'See our Enterprise page',
      href: '/starlink-enterprise-nigeria',
    },
    imageFiles: imageFilesFor('hp-kit--enterprise--enval'),
  },
  {
    id: 'standard--government-office--rivers',
    displayName: 'NCC Zonal Office — Rivers State',
    folder: 'standard--government-office--rivers',
    photoCount: 1,
    location: 'Port Harcourt',
    state: 'Rivers State',
    category: 'government',
    tags: ['Government', 'Mesh WiFi'],
    description: 'Starlink installation and mesh WiFi distribution for the NCC Zonal Office in Rivers State. Government-grade deployment with full network coverage across the office.',
    altTexts: [
      'Starlink installation and mesh WiFi setup at NCC Zonal Office Rivers State by DataGram',
    ],
    internalLink: {
      label: 'See our Enterprise page',
      href: '/starlink-enterprise-nigeria',
    },
    imageFiles: imageFilesFor('standard--government-office--rivers'),
  },
  {
    id: 'hp-kit--enterprise-houseboat--mixed',
    displayName: 'Enterprise & Houseboat Combo Deployment',
    folder: 'hp-kit--enterprise-houseboat--mixed',
    photoCount: 1,
    location: 'Nigeria',
    state: 'Multiple Sites',
    category: 'maritime',
    tags: ['High Performance Kit'],
    description: 'Starlink High Performance Kit deployment covering both an enterprise environment and a houseboat — demonstrating DataGram\'s capability across mixed deployment types in a single engagement.',
    altTexts: [
      'Starlink High Performance Kit installed across enterprise and houseboat environments by DataGram Nigeria',
    ],
    internalLink: {
      label: 'See our Maritime page',
      href: '/starlink-boat-installation',
    },
    imageFiles: imageFilesFor('hp-kit--enterprise-houseboat--mixed'),
  },
  {
    id: 'mini--outdoor-business',
    displayName: 'Starlink Mini Outdoor Business Setup',
    folder: 'mini--outdoor-business',
    photoCount: 2,
    location: 'Nigeria',
    state: 'Outdoor',
    category: 'enterprise',
    tags: ['Starlink Mini'],
    description: 'Starlink Mini configured as a portable hotspot for an outdoor business environment. Compact, weatherproof setup providing reliable connectivity for open-air commercial operations.',
    altTexts: [
      'Starlink Mini hotspot business setup for outdoor environment by DataGram Nigeria',
      'DataGram Starlink Mini portable outdoor business connectivity setup',
    ],
    internalLink: {
      label: 'See our Enterprise page',
      href: '/starlink-enterprise-nigeria',
    },
    imageFiles: imageFilesFor('mini--outdoor-business'),
  },
  {
    id: 'standard--residential--arochukwu',
    displayName: '5-Bedroom Duplex — Arochukwu, Abia State',
    folder: 'standard--residential--arochukwu',
    photoCount: 3,
    location: 'Arochukwu',
    state: 'Abia State',
    category: 'residential',
    tags: ['Standard Kit', 'Mesh WiFi'],
    description: 'Starlink installation with full mesh WiFi distribution across a 5-bedroom duplex in Arochukwu, Abia State. Every room covered with strong, stable WiFi from a single Starlink connection.',
    altTexts: [
      'Starlink installation on 5 bedroom duplex in Arochukwu Abia State by DataGram',
      'Mesh WiFi distribution setup inside duplex Arochukwu Abia State DataGram installation',
      'DataGram technician completing Starlink and mesh WiFi setup in Arochukwu Abia State',
    ],
    internalLink: {
      label: 'See our Home Installation page',
      href: '/starlink-home-installation',
    },
    imageFiles: imageFilesFor('standard--residential--arochukwu'),
  },
  {
    id: 'standard--residential--duplex-4bed',
    displayName: '4-Bedroom Duplex — WiFi Distribution',
    folder: 'standard--residential--duplex-4bed',
    photoCount: 2,
    location: 'Nigeria',
    state: 'Residential',
    category: 'residential',
    tags: ['Standard Kit', 'Mesh WiFi'],
    description: 'Starlink installation and full WiFi distribution across a 4-bedroom duplex. Clean cable routing and optimised router placement for whole-home coverage.',
    altTexts: [
      'Starlink installation and WiFi distribution on 4 bedroom duplex by DataGram Nigeria',
      'DataGram completed Starlink and WiFi setup across 4 bedroom residential duplex',
    ],
    internalLink: {
      label: 'See our Home Installation page',
      href: '/starlink-home-installation',
    },
    imageFiles: imageFilesFor('standard--residential--duplex-4bed'),
  },
];
