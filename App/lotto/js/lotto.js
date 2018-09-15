(function(){
    var lottoNum   = document.querySelector('.lotto_num .num_wrap'),
        myNum      = document.querySelector('.my_num .num_wrap'),
        inputPrice = document.querySelector('.price'),
        numArea, arr1, arr2;

    function setLuckyNumber(){
        arr1 = [];
        lottoNum.innerHTML = '';
        for(var i = 0; i < 6; i++){
            randomNum(); 
            (arr1.includes(num)) ? randomNum() : i - 1;
            arr1.push(num);
            arr1.sort((a, b) => a - b);
        }
        numArea = document.createElement('div');
        numArea.textContent = arr1;
        lottoNum.appendChild(numArea);
    }

    function buyLottos(price){
        arr2 = [];
        myNum.innerHTML = '';
        for(var a = 0; a < price; a++){
            arr2[a] = [];
            for(var i = 0; i < 6; i++){
                randomNum(); 
                (arr2[a].includes(num)) ? randomNum() : i - 1;
                arr2[a].push(num);
                if (arr1.includes(num)){
                    var filtered = arr1.filter(el => el === num);
                    var filteredArr= [];
                    filteredArr.push(filtered);
                    console.log(filteredArr)
                }
                arr2[a].sort((a, b) => a - b);
            }
            numArea = document.createElement('div');
            numArea.textContent = arr2[a];
            myNum.appendChild(numArea);
        }
    }

    function randomNum(){
        return num = Math.floor((Math.random() * 45) + 1);
    }

    inputPrice.addEventListener('keypress', function(e){ 
        var myLength = document.querySelector('.my_length span'),
            value    = e.target.value,
            length   = Math.floor(value / 1000),
            regexp   = /^[0-9]*$/;

        myLength.innerHTML = length;
        if(e.keyCode === 13 && value >= 1000){
            setLuckyNumber();
            buyLottos(length);
        }else if(e.keyCode === 13 && (value <= 999 || !value !== regexp)){
            alert('올바른 금액을 입력해주세요')
        }
        
    })

}());