export interface Project {
  id: string;
  displayName: string;
  folder: string;
  photoCount: number;
  location: string;
  state: string;
  category: 'maritime' | 'enterprise' | 'government' | 'residential' | 'home' | 'estate';
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
    'mini--outdoor-business': ['Starlink Mini Outdoor Business img 1.jpeg'],
    'Starlink-Performance': ['Starlink Performance Boat img 1.jpeg', 'Starlink Performance Boat img 2.jpeg'],
    'standard--residential-duplex--aruchukwu': ['WhatsApp Unknown 2026-07-26 at 20.57.28/WhatsApp Image 2026-07-20 at 17.45.05.jpeg', 'WhatsApp Unknown 2026-07-26 at 20.57.28/WhatsApp Image 2026-07-20 at 17.45.05 (1).jpeg', 'WhatsApp Unknown 2026-07-26 at 20.57.28/WhatsApp Image 2026-07-20 at 17.45.05 (2).jpeg'],
    'standard--residential-duplex--unknown': ['photo-1.jpeg', 'photo-2.jpeg'],
    'HOME-INSTALLATION': [
      'WhatsApp Image 2026-09-17 at 11.08.04.jpeg',
      'WhatsApp Image 2026-09-17 at 11.08.04 (1).jpeg',
      'WhatsApp Image 2026-09-17 at 11.08.04 (2).jpeg',
      'WhatsApp Image 2026-09-17 at 11.09.00.jpeg',
      'WhatsApp Image 2026-09-17 at 11.09.01.jpeg',
      'WhatsApp Image 2026-09-17 at 11.09.01 (1).jpeg',
      'WhatsApp Image 2026-09-17 at 11.09.02 (2).jpeg',
      'WhatsApp Image 2026-09-17 at 11.09.03.jpeg',
    ],
    'ESTATE-INSTALLATION': [
      'WhatsApp Image 2026-09-17 at 11.08.58.jpeg',
      'WhatsApp Image 2026-09-17 at 11.09.02.jpeg',
      'WhatsApp Image 2026-09-17 at 11.09.02 (1).jpeg',
      'WhatsApp Image 2026-09-17 at 11.09.03 (1).jpeg',
      'WhatsApp Image 2026-09-17 at 11.09.04.jpeg',
    ],
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
    photoCount: 0,
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
    folder: 'standard--residential-duplex--aruchukwu',
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
    imageFiles: [
      'WhatsApp Unknown 2026-07-26 at 20.57.28/WhatsApp Image 2026-07-20 at 17.45.05.jpeg',
      'WhatsApp Unknown 2026-07-26 at 20.57.28/WhatsApp Image 2026-07-20 at 17.45.05 (1).jpeg',
      'WhatsApp Unknown 2026-07-26 at 20.57.28/WhatsApp Image 2026-07-20 at 17.45.05 (2).jpeg',
    ],
  },
  {
    id: 'starlink--high-performance-houseboat',
    displayName: 'Starlink High Performance Installation — Coastal Houseboat',
    folder: 'Starlink-Performance',
    photoCount: 2,
    location: 'Nigeria',
    state: 'Maritime',
    category: 'maritime',
    tags: ['Enterprise', 'High Performance Kit', 'Houseboat'],
    description: 'Starlink High Performance Kit deployed on a coastal houseboat in Nigeria. Premium maritime connectivity with enterprise-grade reliability for on-water living and working spaces.',
    altTexts: [
      'Starlink High Performance Kit installation on a coastal houseboat by DataGram Nigeria',
      'Coastal houseboat Starlink installation with premium maritime connectivity by DataGram',
    ],
    internalLink: {
      label: 'See our Boat Installation page',
      href: '/starlink-boat-installation',
    },
    imageFiles: imageFilesFor('Starlink-Performance'),
  },
  {
    id: 'standard--home--lekki-lagos',
    displayName: 'Standard Residential Deployment — Lagos',
    folder: 'HOME-INSTALLATION',
    photoCount: imageFilesFor('HOME-INSTALLATION').length,
    location: 'Lekki',
    state: 'Lagos State',
    category: 'home',
    tags: ['Standard Kit', 'Mesh WiFi'],
    description:
      'Standard Starlink kit installed at a residential property in Lekki, Lagos State, with mesh WiFi distribution for whole-home coverage.',
    altTexts: [
      'Starlink Standard Kit residential installation in Lekki Lagos State by DataGram',
      'Starlink dish mounted on Lekki Lagos home rooftop by DataGram',
      'Residential Starlink cable and router setup Lekki Lagos DataGram',
      'Mesh WiFi access point installation inside Lekki Lagos home by DataGram',
      'DataGram technician completing Starlink home install in Lekki Lagos',
      'Finished Starlink residential network handover Lekki Lagos State',
      'Starlink Standard Kit outdoor mount detail Lekki Lagos installation',
      'Whole-home Starlink mesh WiFi coverage setup Lekki Lagos by DataGram',
    ],
    internalLink: {
      label: 'See our Home Installation page',
      href: '/starlink-home-installation',
    },
    imageFiles: imageFilesFor('HOME-INSTALLATION'),
  },
  {
    id: 'estate--multi-unit--abuja-fct',
    displayName: 'Multi-Unit Estate WiFi Distribution — Abuja',
    folder: 'ESTATE-INSTALLATION',
    photoCount: imageFilesFor('ESTATE-INSTALLATION').length,
    location: 'Abuja',
    state: 'FCT',
    category: 'estate',
    tags: ['Priority Plan', 'Mesh WiFi', 'Network Distribution'],
    description:
      'Estate-wide Starlink deployment in Abuja with Priority Plan activation and mesh WiFi distribution across multiple units.',
    altTexts: [
      'Starlink estate installation with Priority Plan in Abuja FCT by DataGram',
      'Estate WiFi distribution network rack and cabling Abuja FCT DataGram',
      'Mesh access points covering multi-unit estate Abuja by DataGram',
      'Starlink dish mounted for Abuja estate broadband distribution',
      'Completed multi-unit estate Starlink WiFi handover Abuja FCT',
    ],
    internalLink: {
      label: 'See our Estate WiFi page',
      href: '/starlink-estate-wifi-nigeria',
    },
    imageFiles: imageFilesFor('ESTATE-INSTALLATION'),
  },
];
