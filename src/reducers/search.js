import { handleActions } from 'redux-actions';
import { ACTIVITY_INDICATOR, loading, CAR_DATA_REQUEST, requestedData} from '../actions/activityMonitoring.js';

const initialState = {
  carMake: 'cadillac',
  value: 0,
  startYear:1990,
  endYear:2017,
  minPrice:1000,
  maxPrice:150000,
  zipcode:'',
  model: 'Fleetwood',
  loading: false,
  modelIndex: 3,
  searchResults:[],
  requestedCarData: false,
  allCars: {
    acura: {
      name: 'Acura',
      models: ['CL', 'ILX', 'ILX Hybrid', 'Integra', 'Legend', 'MDX', 'NSX', 'RDX', 'RL', 'RLX', 'RLX Sport Hybrid', 'RSX', 'TL', 'TLX', 'TSX', 
               'Vigor', 'ZDX'],
    },
    am_general: {
      name: 'AM General',
      models: ['Hummer'],
    },
    amc: {
      name: 'AMC',
      models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
    },
    alfa: {
      name: 'Alfa-Romeo',
      models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
    },
    aston: {
      name: 'Aston Martin',
      models: ['DB AR1 Zagato', 'DB5', 'DB7', 'DB7 Vantage', 'DB9', 'DBS', 'Rapide', 'Rapide S', 'V12 Vanquish', 'V12 Vantage', 
               'V12 Vantage S', 'V8 Vantage', 'V8 Vantage S', 'Vanquish', 'Vantage', 'Vantage GT', 'Virage'],
    },
    audi: {
      name: 'Audi',
      models: ['A3', 'A3 Sportback', 'A3 e-tron', 'A4', 'A4 Avant', 'A5', 'A6', 'A7', 'A8', 'allroad', 'allroad Quattro', 'Q3', 'Q5', 
               'Q5 Hybrid', 'Q7', 'R8', 'RS 4', 'RS 5', 'RS 7', 'RS6','S3', 'S4', 'S4 Avant', 'S5', 'S6', 'S7', 'S8', 'SQ5', 'TT', 
               'TT RS', 'TTS'],
    },
    austin: {
      name: 'Austin',
      models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
    },
    austin_healey: {
      name: 'Austin-Healey',
      models: ['3000', 'Sprite'],
    },
    avanti: {
      name: 'Avanti Motors',
      models: ['Avanti'],
    },
    bentley: {
      name: 'Bentley',
      models: ['Arnage', 'Azure', 'Bentayga', 'Brooklands', 'Continental', 'Continental Flying Spur', 'Continental GT', 'Continental GTC', 
               'Continental Supersports', 'Flying Spur', 'Mulsanne', 'R-Type'],
    },
    bmw: {
      name: 'BMW',
      models: ['1 Series', '1 Series M', '128', '135', '1602', '2 Series', '228', '3 Series', '3 Series Gran Turismo', '320', '323', 
               '325', '328', '328 Gran Turismo', '328d', '330', '330e', '335', '335 Gran Turismo', '340', '4 Series', '428', 
               '428 Gran Coupe', '435', '435 Gran Coupe', '525', '528', '530', '535', '535 Gran Turismo', '535d', '540', '545', '550', 
               '550 Gran Turismo', '640', '640 Gran Coupe', '645', '650', '650 Gran Coupe', '740', '745', '750', '760', '8 Series', 
               'ActiveHybrid 3', 'ActiveHybrid 5', 'ActiveHybrid 6', 'ActiveHybrid 7', 'ActiveHybrid 740', 'ActiveHybrid 750', 
               'Alpina B6 Gran Coupe', 'Alpina 7', 'i3', 'i8', 'Isetta', 'M', 'M2', 'M235', 'M3', 'M4', 'M5', 'M6', 'M6 Gran Coupe', 
               'X1', 'X3', 'X4', 'X5', 'X5 eDrive', 'X5 M', 'X6', 'X6 M', 'Z3', 'Z3 M', 'Z4', 'Z4 M', 'Z8']
    },
    borgward: {
      name: 'Borgward',
      models: ['Hansa', 'Isabella', 'P100'],
    },
    bricklin: {
      name: 'Bricklin',
      models: ['SV-1'],
    },
    bugatti: {
      name: 'Bugatti',
      models: ['Veyron', 'Veyron 16.4', 'Veyron 16.4 Grand Sport', 'Veyron 16.4 Super Sport', 'Veyron 16.4 Super Sport Vitesse']
    },
    buick: {
      name: 'Buick',
      models: ['Apollo', 'Cascada', 'Century', 'Electra', 'Enclave', 'Encore', 'Envision', 'Estate Wagon', 'LaCrosse', 'LeSabre', 'Lucerne', 
               'Park Avenue', 'Rainier', 'Reatta', 'Regal', 'Rendezvous', 'Riviera', 'Roadmaster', 'Skylark', 'Special', 'Super', 'Terraza', 
               'Verano', 'Wildcat'],
    },
    cadillac: {
      name: 'Cadillac',
      models: ['ATS', 'ATS Coupe', 'ATS-V', 'ATS-V Coupe', 'Brougham', 'Catera', 'Cimarron', 'CT6', 'CTS', 'CTS-V', 'DeVille', 'DTS', 
               'Eldorado', 'ELR', 'Escalade', 'Escalade ESV', 'Escalade EXT', 'Escalade Hybrid', 'Fleetwood', 'LaSalle', 'Series 62', 
               'Seville', 'Sizty Special', 'SRX', 'STS', 'STS-V', 'XLR', 'XLR-V', 'XT5', 'XTS'],
    },
    chevrolet: {
      name: 'Chevrolet',
      models: ['210', '2500', '2100', '3200', '3500', '3600', 'Apache', 'Astro', 'Astro Cargo Van', 'Avalanche', 'Aveo', 'Bel Air', 
               'Beretta', 'Biscayne', 'Blazer', 'C/K 10', 'C/K 20', 'C/K 30', 'C/K 1500', 'C/K 2500', 'C/K 3500', 'Camero', 'Caprice', 
               'Captiva Sport', 'Cavalier', 'Celebrity', 'Chevelle', 'City Express', 'Classic', 'Cobalt', 'Colorado', 'Corsica', 
               'Corvair', 'Corvette', 'Corvette Stingray', 'Cruze', 'Cruze Limited', 'Delray', 'Delux', 'El Camino', 'Equinox', 
               'Express 1500', 'Express 2500', 'Express 3500', 'Express Van', 'HHR', 'Impala', 'Impala Limited', 'Lumina', 'LUV', 'Malibu', 
               'Malibu Classic', 'Malibu Hybrid', 'Malibu Limited', 'Malibu Maxx', 'Master', 'Metro', 'Monte Carlo', 'Nomad', 'Nova', 'Pickup', 
               'Prizm', 'S-10', 'Silverado 1500', 'Silverado 1500 Hybrid', 'Silverado 2500', 'Silverado 3500', 'Sonic', 'Spark',
               'Spark EV', 'SS', 'SSR', 'Styleline', 'Suburban', 'Superior', 'Tahoe', 'Tahoe Hybrid', 'Tracker', 'TrailBlazer', 
               'TrailBlazer EXT', 'Traverse', 'Trax', 'Uplander', 'Vega', 'Venture', 'Volt'],
    },
    chrysler: {
      name: 'Chrysler',
      models: ['200', '300', '300C', '300M', 'Aspen', 'Aspen Hybrid', 'Cirrus', 'Concorde', 'Conquest', 'Cordoba', 'Crossfire', 
               'Crossfire SRT-6', 'Fifth Avenue', 'Grand Voyager', 'Imperial', 'Laser', 'Le Baron', 'LHS', 'New Yorker', 'Newport', 
               'Pacifica', 'Prowler', 'PT Cruiser', 'Royal', 'Saratoga', 'Sebring', 'TC', 'Town & Country', 'Voyager', 'Windsor'],
    },
    daewoo: {
      name: 'Daewoo',
      models: ['Lanos', 'Leganza', 'Nubira'],
    },
    datsun: {
      name: 'Datsun',
      models: ['1500', '2000', '240Z', '260Z', '280Z'],
    },
    delorean: {
      name: 'Delorean',
      models: ['DMC-12'],
    },
    dodge: {
      name: 'Dodge',
      models: ['440', '600', 'Aries', 'Avenger', 'Caliber', 'Caravan', 'Challenger', 'Charger', 'Coronet', 'D-Series', 'Dakota', 
               'Dart', 'Daytona', 'Diplomat', 'Durango', 'Durango Hybrid', 'Dynasty', 'Grand Caravan', 'Intrepid', 'Journey', 
               'Lancer', 'Luxury Liner', 'Magnum', 'Monaco', 'Neon', 'Neon SRT-4', 'Nitro', 'Polara', 'Power Wagon', 'Raider', 
               'Ram 150', 'Ram 1500', 'Ram 250', 'Ram 2500', 'Ram 350', 'Ram 3500', 'Ram 50 Pickup', 'Ram SRT-10', 'Ram Van', 
               'Ram Wagon', 'Ramcharger', 'Rampage', 'Shadow', 'Spirit', 'Sprinter', 'SRT Viper', 'Stealth', 'Stratus', 'Super Bee', 
               'Van', 'Viper'],
    },
    eagle: {
      name: 'Eagle',
      models: ['Summit', 'Talon', 'Vision'],
    },
    edsel: {
      name: 'Edsel',
      models: ['Ranger'],
    },
    ferrari: {
      name: 'Ferrari',
      models: ['250 Europa', '250 GTO', '308', '328', '330', '348', '360 Modena', '360 Spider', '365', '430 Scuderia', '456 GT', '456 M', 
               '458 Italia', '458 Speciale', '458 Spider', '512TR', '550 Barchetta', '550 Maranello', '575 M', '599 GTB Fiorano', '599 GTO', 
               '612 Scaglietti', ' California', 'Challenge Stradale', 'Dino 246', 'Enzo', 'F12berlinetta', 'F355', 'F430', 'F40', 'F50', 'FF', 
               'LaFerrari', 'Mondial', 'Superamerica', 'Testarossa'],
    },
    fiat: {
      name: 'FIAT',
      models: ['124 Spider', '500', '500C', '500e', '500L', '500X', 'X1/9'],
    },
    fisker: {
      name: 'Fisker',
      models: ['Karma']
    },
    ford: {
      name: 'Ford',
      models: ['Aerostar', 'Aspire', 'Bronco', 'Bronco II', 'C-Max', 'C-Max Energi', 'C-Max Hybrid', 'Contour', 'Contour SVT', 
               'Country Squire', 'Coupe', 'Crestline', 'Crown Victoria', 'E-150', 'E150', 'E250', 'E-250', 'E-350', 'E350', 
               'E350 Super Duty', 'Edge', 'Elite','Escape', 'Escape Hybrid', 'Escort', 'Excursion', 'Expedition', 'Expedition EL', 
               'Explorer', 'Explorer Sport', 'Explorer Sport Trac', 'F-100', 'F150', 'F-150', 'F-150 Super Duty', 'F250', 'F-250', 
               'F-250 Super Duty', 'F350', 'F-350', 'F-350 Super Duty', 'F450', 'F-450', 'F-450 Super Duty', 'Fairlane', 'Fairmont', 
               'Falcon', 'Festiva', 'Fiesta', 'Five Hundred', 'Flex', 'Focus', 'Focus Electric', 'Focus RS', 'Focus ST', 'Focus SVT', 
               'Freestar', 'Freestyle', 'Fusion', 'Fusion Energi', 'Fusion Hybrid', 'Galaxie', 'GT', 'Maverick', 'Model 40', 'Model A', 
               'Model B', 'Model T', 'Mustang', 'Mustang SVT Cobra', 'Pinto', 'Probe', 'Ranchero', 'Ranger', 'Sedan Police Interceptor', 
               'Shelby GT350', 'Shelby GT500', 'Taurus', 'Taurus X', 'Tempo', 'Thunderbird', 'Transit Connect', 'Transit-150', 
               'Transit-250', 'Transit-350', 'Utility Police Interceptor', 'Windstar', 'Victoria', 'ZX2'],
    },
    geo: {
      name: 'GEO',
      models: ['Metro', 'Prizm', 'Spectrum', 'Storm', 'Tracker'],
    },
    gmc: {
      name: 'GMC',
      models: ['Acadia', 'Acadia Limited', 'C/K 2500 Series', 'C/K 3500 Series', 'Caballero', 'Canyon', 'Envoy', 'Envoy XL', 'Envoy XUV', 
               'Jimmy', 'Rally Wagon', 'S-15', 'S-15 Jimmy', 'Safari', 'Safari Cargo', 'Savana', 'Savana Cargo', 'Savana 1500', 'Savana 2500', 
               'Savana 3500', 'Sierra 1500', 'Sierra 1500 Hybrid', 'Sierra 1500HD', 'Sierra 2500', 'Sierra 2500HD', 'Sierra 2500HD Classic', 
               'Sierra 3500', 'Sierra 3500HD', 'Sierra C3', 'Sierra Classic 1500', 'Sierra Classic 2500', 'Sierra Classic 3500', 'Sprint', 
               'Sonoma', 'Suburban', 'Syclone', 'Terrain', 'Terrain Denali', 'Typhoon', 'Yukon', 'Yukon Denali', 'Yukon Hybrid', 'Yukon XL'],
    },
    honda: {
      name: 'Honda',
      models: ['Accord', 'Accord Coupe', 'Accord Crosstour', 'Accord Hybrid', 'Accord Plug-In Hybrid', 'Civic', 'Civic Coupe', 'Civic CRX', 
               'Civic del Sol', 'Civic Hybrid', 'CR-V', 'CR-Z', 'Crosstour', 'Element', 'Fit', 'Fit EV', 'HR-V', 'Insight', 'Odyssey', 
               'Passport', 'Pilot', 'Prelude', 'Ridgeline', 'S2000'],
    },
    hummer: {
      name: 'Hummer',
      models: ['H1', 'H1 Alpha', 'H2', 'H3', 'H3T'],
    },
    hyundai: {
      name: 'Hyundai',
      models: ['Accent', 'Azera', 'Elantra', 'Elantra Coupe', 'Elantra GT', 'Elantra Touring', 'Entourage', 'Equus', 'Excel', 'Genesis', 
               'Genesis Coupe', 'Santa Fe', 'Santa Fe Sport', 'Scoupe', 'Sonata', 'Sonata Hybrid', 'Sonata Plug-In Hybrid', 'Tiburon', 
               'Tuscon', 'Veloster', 'Veloster Turbo', 'Veracruz', 'XG300', 'XG350'],
    },
    infiniti: {
      name: 'Infiniti',
      models: ['EX35', 'EX37', 'FX35', 'FX37', 'FX45', 'FX50', 'G20', 'G25', 'G35', 'G37', 'I30', 'I35', 'IPL G', 'J30', 'JX35', 'M Hybrid', 
               'M30', 'M35', 'M35h', 'M37', 'M45', 'M56', 'Q40', 'Q45', 'Q50', 'Q50 Hybrid', 'Q60', 'Q60 IPL', 'Q70', 'Q70 Hybrid', 'Q70h', 
               'Q70L', 'QX4', 'QX50', 'QX56', 'QX60', 'QX60 Hybrid', 'QX70', 'QX80'],
    },
    isuzu: {
      name: 'Isuzu',
      models: ['Amigo', 'Ascender', 'Axiom', 'Hombre', 'i-280', 'i-290', 'i-350', 'i-370', 'Rodeo', 'Rodeo Sport', 'Trooper', 'VehiCross'],
    },
    jaguar: {
      name: 'Jaguar',
      models: ['E-TYPE', 'F-PACE', 'F-TYPE', 'Mark 1', 'Mark 2', 'S-TYPE', 'S-TYPE R', 'Super V8', 'Super V8 Portfolio', 'Vanden Plas', 
               'X-TYPE', 'XE', 'XF', 'XJ', 'XJ-S', 'XJ8', 'XJR', 'XK', 'XK120', 'XK140', 'XK8', 'XKR'],
    },
    jeep: {
      name: 'Jeep',
      models: ['Cherokee', 'CJ5', 'CJ7', 'CJ8', 'Comanche', 'Commander', 'Compass', 'Grand Cherokee', 'Grand Wagoneer', 'Liberty', 
               'Patriot', 'Renegade', 'Wagoneer', 'Wrangler', 'Wrangler Limited'],
    },
    jensen: {
      name: 'Jensen',
      models: ['Interceptor'],
    },
    kaiser: {
      name: 'Kaiser',
      models: ['Darrin'],
    },
    kia: {
      name: 'Kia',
      models: ['Amanti', 'Borrego', 'Cadenza', 'Forte', 'Forte Koup', 'Forte5', 'K900', 'Optima', 'Optima Hybrid', 'Rio', 'Rio5', 'Rondo', 
               'Sedona', 'Sephia', 'Sorento', 'Soul', 'Soul EV', 'Spectra', 'Spectra5', 'Sportage'],
    }, 
    koenigsegg: {
      name: 'Koenigsegg',
      models: ['CCX'],
    },
    lamborghini: {
      name: 'Lamborghini',
      models: ['Aventador', 'Countache', 'Diablo', 'Espada', 'Gallardo', 'Huracan', 'LM002', 'Murcielago'],
    },
    land_rover: {
      name: 'Land Rover',
      models: ['Defender', 'Discovery', 'Discover Series II', 'Discovery Sport', 'Freelancer', 'LR2', 'LR3', 'LR4', 'Range Rover', 
               'Range Rover Evoque', 'Range Rover Sport', 'Series IIA'],
    },
    lexus: {
      name: 'Lexus',
      models: ['CT 200h', 'ES 300', 'ES 300h', 'ES 330', 'ES 350', 'GS 200t', 'GS 300', 'GS 350', 'GS 400', 'GS 430', 'GS 450h', 'GS 460',
               'GS F', 'GX 460', 'GX 470', 'HS 250h', 'IS 200t', 'IS 250', 'IS 250C', 'IS 300', 'IS 350', 'IS 350C', 'IS-F', 'LFA', 'LS 400', 
               'LS 430', 'LS 460', 'LS 600h L', 'LX 470', 'LX 570', 'NX 200t', 'NX 300h', 'RC 200t', 'RC 300', 'RC 350', 'RC F', 'RX 300', 
               'RX 330', 'RX 400h', 'RX 450h', 'SC 300', 'SC 400', 'SC 430'],
    },
    lincoln: {
      name: 'Lincoln',
      modles: ['Aviator', 'Blackwood', 'Continental', 'LS', 'Mark LT', 'Mark VII', 'Mark VIII', 'MKC', 'MKS', 'MKT', 'MKX', 'MKZ', 
               'MKZ Hybrid', 'Navigator', 'Navigator L', 'Town Car', 'Zephyr'],
    },
    lotus: {
      name: 'Lotus',
      models: ['Elise', 'Esprit', 'Esprit V8', 'Evora', 'Exige', 'Exige S'],
    },
    maserati: {
      name: 'Maserati',
      models: ['Coupe', 'Ghibli', 'GranSport', 'GranSport Spyder', 'GranTurismo', 'MC12', 'Merak', 'Quattroporte', 'Spyder'],
    },
    maybach: {
      name: 'Maybach',
      models: ['Landaulet', 'Type 57', 'Type 62'],
    },
    mazda: {
      name: 'Mazda',
      models: ['323', '626', '929', 'B-Series Pickup', 'B2300', 'B2500', 'B3000', 'B4000', 'CX-3', 'CX-5', 'CX-7', 'CX-9', 'Mazda2', 
               'Mazda3', 'Mazda5', 'Mazda6', 'MazdaSpeed Miata MX-5', 'MazdaSpeed Protege', 'MazdaSpeed3', 'MazdaSpeed6', 'Millenia', 
               'MPV', 'MX-3', 'MX-5 Miata', 'MX-6', 'Navajo', 'Protege', 'Protege5', 'RX-7', 'RX-8', 'Tribute', 'Tribute Hybrid'],
    },
    mclaren: {
      name: 'McLaren',
      models: ['570S', '650S', '675LT', 'MP4-12C', 'P1'],
    },
    mercedes: {
      name: 'Mercedes-Benz',
      models: ['190-Class', '220', '240', '280', '300 Class', '350 Class', '380 Class', '400-Class', '420-Class', '450-Class', '500-Class', 
               '560-Class', '600-Class', 'AMG C', 'AMG CLA', 'AMG CLS', 'AMG E', 'AMG G', 'AMG GL', 'AMG GLA', 'AMG GLE', 'AMG GLS', 'AMG GT', 
               'AMG S', 'AMG SL', 'AMG SLK', 'B-Class Electric Drive', 'C-Class', 'CL-Class', 'CLA-Class', 'CLK-Class', 'CLS-Class', 'E-Class', 
               'G-Class', 'GL-Class', 'GLA-Class', 'GLC-Class', 'GLE-Class', 'GLK-Class', 'GLS-Class', 'M-Class', 'Maybach S', 'Metris-Class', 
               'R-Class', 'S-Class', 'SL-Class', 'SLK-Class', 'SLR McLaren', 'SLS AMG', 'SLS AMG Black Series', 'Sprinter', 'Sprinter Cargo'],
    },
    mercury: {
      name: 'Mercury',
      models: ['Bobcat', 'Capri', 'Comet', 'Cougar', 'Eight', 'Grand Marquis', 'Marauder', 'Mariner', 'Mariner Hybrid', 'Marquis', 
               'Milan', 'Milan Hybrid', 'Montclair', 'Montego', 'Monterey', 'Mountaineer', 'Mystique', 'Park Lane', 'Sable', 'Topaz',
               'Tracer', 'Tudor', 'Villager', 'Zephyr'],
    },
    merkur: {
      name: 'Merkur',
      models: ['XR4Ti'],
    },
    mg: {
      name: 'MG',
      models: ['MGA', 'MGB'],
    },
    mini: {
      name: 'MINI',
      models: ['Clubman', 'Cooper Clubman', 'Cooper S Clubman', 'Cooper', 'Cooper Convertible', 'Cooper S', 'Cooper Countryman', 'Cooper S Countryman', 
               'Countryman', 'Coupe', 'Cooper Hardtop', 'Cooper Paceman', 'Roadster'],
    },
    mitsubishi: {
      name: 'Mitsubishi',
      models: ['3000GT', 'Diamante', 'Eclipse', 'Eclipse Spyder', 'Endeavor', 'Expo', 'Galant', 'i-MiEV', 'Lancer', 'Lancer Evolution', 
               'Lancer Sportback', 'Mighty Max Pickup', 'Mirage', 'Mirage G4', 'Montero', 'Montero Sport', 'Outlander', 'Outlander Sport', 
               'Raider'],
    },
    morgan: {
      name: 'Morgan',
      models: ['Aero 8', 'Plus 8', 'Roadster'],
    },
    nash: {
      name: 'Nash',
      models: ['Metropolitan'],
    },
    nissan: {
      name: 'Nissan',
      models: ['200SX', '240SX', '280ZX', '300ZX', '350Z', '370Z', 'Altima', 'Altima Coupe', 'Altima Hybrid', 'Armada', 'Cube', 
               'Frontier', 'GT-R', 'Juke', 'Leaf', 'Maxima', 'Murano', 'Murano CrossCabriolet', 'NV Cargo', 'NV Cargo NV1500', 
               'NV Cargo NV2500 HD', 'NV Cargo NV3500 HD', 'NV Passenger', 'NV Passenger NV3500 HD', 'NV200', 'Pathfinder', 
               'Pathfinder Hybrid', 'Pulsar', 'Quest', 'Rogue', 'Rogue Hybrid', 'Rogue Select', 'Sentra', 'Titan', 'Titan XD', 
               'Versa', 'Versa Note', 'Xterra'],
    },
    oldsmobile: {
      name: 'Oldsmobile',
      models: ['442', 'Alero', 'Archieva', 'Aurora', 'Bravada', 'Ciera', 'Cutlass', 'Cutlass Ciera', 'Cutlass Supreme', 'Delmont 88',
               'Eighty-Eight', 'Eighty-Eight Royale', 'Firenza', 'Intrigue', 'LSS', 'Ninety-Eight', 'Regency', 'Silhouette', 'Starfire',
               'Toronado', 'Vista Cruiser'],
    },
    packard: {
      name: 'Packard',
      models: ['110', 'Clipper'],
    },
    panoz: {
      name: 'Panoz',
      models: ['AIV Roadster', 'Esperante', 'Roadster'],
    },
    plymouth: {
      name: 'Plymouth',
      models: ['Acclaim', 'Barracuda', 'Belvedere', 'Breeze', 'Delux', 'Duster', 'Fury', 'Grand Voyager', 'GTX', 'Horizon', 'Lazer',
               'Neon', 'Prowler', 'Road Runner', 'Satellite', 'Savoy', 'Scamp', 'Suburban', 'Sundance', 'Superbird', 'Valiant', 'Volare',
               'Voyager'],
    },
    pontiac: {
      name: 'Pontiac',
      models: ['6000', 'Aztek', 'Bonneville', 'Catalina', 'Chieftan', 'Fiero', 'Firebird', 'G3', 'G5', 'G6', 'G8', 'Grand Am', 
               'Grand Prix', 'Grand Ville', 'GTO', 'Le Mans', 'Montana', 'Montana SV6', 'Parisienne', 'Solstice', 'Star Chief',
               'Sunbird', 'Sunfire', 'Torrent', 'Vibe'],
    },
    porsche: {
      name: 'Porsche',
      models: ['356', '550 Spyder', '718 Boxter Convertible', '911', '911 Coupe', '911 R', '911 GT3', '911 GT3 RS', '912', '914', 
               '918 Spyder', '918 Spyder Convertible', '924', '928', '944', '959', '968', 'Boxter', 'Carrera GT', 'Cayenne', 
               'Cayenne Hybrid', 'Cayenne Diesel', 'Cayman', 'Macan', 'Panamera', 'Panamera e-Hybrid', 'Panamera Hybrid'],
    },
    qvale: {
      name: 'Qvale',
      models: ['Mangusta'],
    },
    ram: {
      name: 'RAM',
      models: ['1500', '2500', '3500', '3500 Ran Chassis', '4500 Ram Chassis', 'C/V', 'Dakota', 'ProMaster 1500', 'ProMaster 2500', 
               'ProMaster 2500 Window Van', 'ProMaster 3500', 'ProMaster City', 'ProMaster 3500 Window Van'],
    },
    rolls_royce: {
      name: 'Rolls-Royce',
      models: ['40/50 HP Silver Ghost', 'Corniche', 'Dawn', 'Ghost', 'Park Ward', 'Phantom', 'Phantom Coupe', 'Phantom Drophead Coupe', 
               'Phantom VI', 'Silver Cloud', 'Silver Dawn', 'Silver Ghost', 'Silver Seraph', 'Silver Shadow', 'Silver Spirit',
               'Silver Spur', 'Wraith'],
    },
    saab: {
      name: 'Saab',
      models: ['9-2X', '9-3', '9-3 SportCombi', '9-3X', '9-4X', '9-5', '9-5 SportCombi', '9-7X', '900', '9000'],
    },
    saleen: {
      name: 'Saleen',
      models: ['S281', 'S7'],
    },
    saturn: {
      name: 'Saturn',
      models: ['Astra', 'Aura', 'Aura Hybrid', 'Ion', 'Ion Red Line', 'L', 'L300', 'LS', 'LW', 'Outlook', 'Relay', 'SC', 'Sky', 'SL', 
               'SW', 'Vue', 'Vue Hybrid'],
    },
    scion: {
      name: 'Scion',
      models: ['FR-S', 'iA', 'iM', 'iQ', 'tC', 'xA', 'xB', 'xD'],
    },
    shelby: {
      name: 'Shelby',
      models: ['Cobra'],
    },
    smart: {
      name: 'smart',
      models: ['ForTwo', 'ForTwo Electric Drive'],
    },
    spyker: {
      name: 'Spyker',
      models: ['C8', 'C8 Aileron', 'C8 Laviolette'],
    },
    studebaker: {
      name: 'Studebaker',
      models: ['Champion', 'Commander', 'Dictator', 'Hawk', 'Lark'],
    },
    subaru: {
      name: 'Subaru',
      models: ['B9 Tribeca', 'Baja', 'BRZ', 'Crosstrek', 'Crosstrek Hybrid', 'Forester', 'GL', 'Impreza', 'Impreza Outback Sport', 'Impreza WRX', 
               'Impreza WRX STi', 'Legacy', 'Loyale', 'Outback', 'SVX', 'Tribeca', 'WRX', 'WRX STi', 'XV Crosstrek', 'XV Crosstrek Hybrid'],
    },
    suzuki: {
      name: 'Suzuki',
      models: ['Aerio', 'Equator', 'Esteem', 'Forenza', 'Grand Vitara', 'Kizashi', 'Reno', 'Samurai', 'Sidekick', 'Swift', 'SX4', 'Verona', 
               'Vitara', 'X-90', 'XL-7'],
    },
    tesla: {
      name: 'Tesla',
      models: ['Model S', 'Model X', 'Roadster'],
    },
    toyota: {
      name: 'Toyota',
      models: ['4Runner', 'Avalon', 'Avalon Hybrid', 'Camry', 'Camry Hybrid', 'Camry Solara', 'Celica', 'Corolla', 'Corona', 'Cressida',
               'ECHO', 'FJ Cruiser', 'FJ40', 'Highlander', 'Highlander Hybrid', 'Land Cruiser', 'Matrix', 'Miraj', 'Mirai', 'MR2', 
               'MR2 Spyder', 'Paseo', 'Previa', 'Prius', 'Prius c', 'Prius Plug-in', 'Prius v', 'RAV4', 'RAV4 EV', 'RAV4 Hybrid', 
               'Sequoia', 'Sienna', 'Supra', 'T100', 'Tacoma', 'Tercel', 'Tundra', 'Venza', 'Yaris'],
    },
    triumph: {
      name: 'Triumph',
      models: ['GT6', 'Spitfire', 'TR3', 'TR3A', 'TR4', 'TR4A', 'TR6', 'TR7'],
    },
    volkswagen: {
      name: 'Volkswagen',
      models: ['Beetle', 'Cabrio', 'Cabriolet', 'CC', 'Corrado', 'e-Golf', 'Eos', 'Eurovan', 'Fox', 'GLI', 'Golf', 'Golf GTI', 'Golf R', 
               'Golf SportWagen', 'GTI', 'Jetta', 'Jetta Hybrid', 'Jetta SportWagen', 'Karmann Ghia', 'Microbus', 'New Beetle', 'Passat', 
               'Phaeton', 'R32', 'Rabbit', 'Routan', 'Scirocco', 'Super Beetle', 'Thing', 'Tiguan', 'Touareg', 'Touareg 2', 'Touareg Hybrid', 
               'Type 2', 'Vanagon'],
    },
    volvo: {
      name: 'Volvo',
      models: ['122', '240', '740', '760', '780', '850', '940', '960', 'C30', 'C70', 'P1800', 'S40', 'S60', 'S60 Cross Country', 
               'S60 Inscription', 'S60 R', 'S70', 'S80', 'S90', 'V40', 'V50', 'V60', 'V60 Cross Country', 'V70', 'V70 R', 'V90', 
               'XC', 'XC60', 'XC70', 'XC90', 'XC90 Hybrid'],
    },
    vpg: {
      name: 'VPG',
      models: ['MV-1'],
    }
  }
};


export default handleActions({
  // GET_CARDATA: (state, { payload }) => ({
  //   ...state,
  //   ...payload.payload
  // }),
  GET_CARDATA: (state, action ) => ({ ...state, searchResults:action.payload}),
  SET_QUERY: (state, action) => ({
    ...state,
    ...action.payload }),

  ACTIVITY_INDICATOR: (state, payload) => ({
    ...state,
    ...payload.activityIndication
  }),

  CAR_DATA_REQUEST: (state, payload) => ({
    ...state,
    ...payload.request
  })
}, initialState);
