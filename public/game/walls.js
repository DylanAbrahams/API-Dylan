export const walls = [
      // Volledige buitenkant
        // Links
        { x: 300, y: 250, w: 20, h: 600 },
        // Rechts
        { x: 1915, y: 200, w: 20, h: 650 },
        // Boven
        { x: 300, y: 250, w: 400, h: 20 },
        { x: 820, y: 200, w: 1100, h: 20 },
        // Onder
        { x: 300, y: 830, w: 570, h: 20 },
        { x: 1140, y: 830, w: 790, h: 20 },
  
    // Beginpunt onderaan
    { x: 850, y: 830, w: 20, h: 270 },
    { x: 1140, y: 830, w: 20, h: 270 },

    // Uitgang bovenaan 
    { x: 700, y: 0, w: 20, h: 270 }, // Links
    { x: 820, y: 0, w: 20, h: 200 }, // Rechts

    // Bomen

        // Ingang
        { x: 850, y: 1030, w:90, h: 70 }, // Begin eerste boom links
        { x: 850, y: 960, w:60, h: 70 }, // Begin tweede boom links
        { x: 1045, y: 895, w:95, h: 200 }, // Begin bomen rechts
        { x: 1010, y: 960, w:35, h: 80 }, // Begin halve boom rechts

        // Onderste laag
        { x: 440, y: 705, w:80, h: 70 }, // 1 boom
        { x: 405, y: 775, w:150, h: 55 }, // 2 bomen
        
        { x: 820, y: 705, w:280, h: 60 }, // 4 bomen
        { x: 850, y: 765, w:150, h: 70 }, // 2 bomen
        { x: 850, y: 835, w:120, h: 60 }, // 2 bomen

        { x: 1300, y: 640, w:220, h: 65 }, // 3 bomen
        { x: 1270, y: 705, w:340, h: 80 }, // 5 bomen
        { x: 1240, y: 785, w:340, h: 45 }, // 5 bomen

        // Tweede laag van onder
        { x: 300, y: 445, w:65, h: 210 }, // 3 bomen verticaal
        { x: 365, y: 510, w:95, h: 90 }, // 2 bomen
        { x: 440, y: 540, w:275, h: 70 }, // 4 bomen
        
        { x: 950, y: 440, w:70, h: 90 }, // 1 boom
        { x: 1020, y: 415, w:75, h: 150 }, // 2 bomen

        
        { x: 1430, y: 415, w:70, h: 150 }, // 2 bomen
        { x: 1500, y: 385, w:75, h: 210 }, // 3 bomen

        { x: 1620, y: 480, w:70, h: 180 }, // 3 bomen
        { x: 1690, y: 445, w:80, h: 280 }, // 4 bomen

        { x: 1875, y: 380, w:40, h: 80 }, // 1 boom rechterkant
        { x: 1875, y: 510, w:40, h: 80 }, // 1 boom rechterkant
        { x: 1875, y: 640, w:40, h: 80 }, // 1 boom rechterkant

        // Bovenste laag
        { x: 320, y: 315, w:45, h: 80 }, // 1 boom linkerkant

        { x: 570, y: 270, w:75, h: 180 }, // 3 bomen
        { x: 645, y: 290, w:65, h: 130 }, // 2 bomen

        { x: 920, y: 220, w:335, h: 50 }, // 5 bomen
        { x: 950, y: 270, w:145, h: 60 }, // 2 bomen

        { x: 1560, y: 220, w:270, h: 50 }, // 4 bomen

        { x: 1875, y: 220, w:40, h: 60 }, // 1 boom

    // 7 Stenen
    { x: 835, y: 480, w:63, h: 50 }, 
    { x: 770, y: 545, w:63, h: 50 }, 
    { x: 867, y: 670, w:58, h: 50 }, 
    { x: 1090, y: 512, w:63, h: 50 }, 
    { x: 1635, y: 450, w:58, h: 50 }, 
    { x: 1700, y: 800, w:58, h: 50 },
    { x: 1857, y: 610, w:58, h: 50 },
];