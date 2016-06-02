var yearA=0;
        
        function navigate(a)
        {
            var year=0,combo=0,count=0;
            if(a==1)
            {
                document.getElementById("comboTwo").style.background="white";        
                combo=1;
                count=2;
            
            }
            if(a==2)
            {
                document.getElementById("comboOne").style.background="white";        
                combo=2;
                count=2;
            
            }
            if(count==2)
            {
                if(combo==1)
                    window.document.location.href = 'year1combo1.html';
                else if(combo==2)
                    window.document.location.href = 'year1combo2.html';

            
            }
            
            
            
            
            
        }
        