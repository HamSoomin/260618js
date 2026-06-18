function calculateShipping (amount) {
    if(amount >= 3000) {
        console.log("送料は500円です");
    } else {
        console.log("送料無料です");
    }
}

calculateShipping(3500);
calculateShipping(1200);