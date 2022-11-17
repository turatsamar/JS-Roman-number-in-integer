var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    
    let left_boundary = Math.max(ax1, bx1);
    let right_boundary = Math.min(ax2, bx2);
    
    let top_boundary = Math.min(ay2, by2);
    let bottom_bondary = Math.max(ay1, by1);
    
    
    let area_1 = (ax2 - ax1)*(ay2 - ay1);
    let area_2 = (bx2 - bx1)*(by2 - by1);
    let intersection = 0;
    
    if( (left_boundary < right_boundary) && (bottom_bondary < top_boundary) ){
        // area_1 and area_2 has overlapped area
        intersection = ( right_boundary - left_boundary ) * ( top_boundary - bottom_bondary );
    }

    
    return area_1 + area_2 - intersection;
};