/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
 
  theme: {

  

    extend: {

      colors:{
        'bluelight': ' rgba(53, 109, 251, 0.05)',
        'blueadd': ' rgba(53, 109, 251, 0.08)',
        'blueass': ' rgba(196, 196, 196, 0.05)',
        
      },
      
      


      fontFamily:{
        'Gruppo' : ['Gruppo'],
        'Open Sans': ['Open Sans'],
        'Roboto': ['Roboto'],
        
      },


    

      fontWeight: {
        semibold: '400',
        bold: '600',
        regular: '400',
      },


     

    
  },
  plugins: [],

}
};
