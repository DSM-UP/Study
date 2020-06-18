use std::io;
use std::cmp::Ordering;

fn main() {
    let (number_of_things, weight_to_endurable) = read_two_i32s().expect("fail to read");

    let things = read_things(number_of_things as usize);

    
    let mut count = 0;
    let mut index = 0;

    let mut max_value_things = BorrowedThings::new();
    let mut temp_value_things = BorrowedThings::new();

    while count < things.get_count() {
        // things.get_access_by_index(index);


        // count += 1;
    }
    
    


}

fn find_endurable_things<'a, 'b>(things: &'a BorrowedThings<'b>, choiced_things: &'a BorrowedThings<'b>) -> BorrowedThings<'b> {
    let mut valueable_things: BorrowedThings<'b> = *choiced_things;


    for thing in &things.things {
        let mut new_things: BorrowedThings<'b> = BorrowedThings::new();
        
        for t in &things.things {
            if t != thing {
                new_things.push_back(t);
            }
        }
        
        let mut new_choiced_things: BorrowedThings<'b> = choiced_things.clone();
        new_choiced_things.push_back(thing);


        let candidate = find_endurable_things(&new_things, &new_choiced_things);
        if valueable_things < candidate {
            valueable_things = candidate;
        }
    }

    
    // valueable_things
    BorrowedThings::new()
}








fn read_things(size: usize) -> Things {
    let mut things = Things::new();

    while things.get_count() < size {
        let (weight, value) = read_two_i32s().expect("fail to read");
        things.push_back(weight, value);
    }

    things
}

fn read_two_i32s() -> Option<(i32, i32)> {
    let inputs = read_line_to_i32_vec();
    if inputs.len() != 2 {
        return None;
    }

    Some((inputs[0], inputs[1]))
}

fn read_line_to_i32_vec() -> Vec<i32> {
    let mut buf : String = String::new();
    io::stdin().read_line(&mut buf).expect("fail to read");

    buf.trim()
        .split_whitespace()
        .flat_map(|x| x.parse::<i32>())
        .collect()
}






struct Things {
    things: Vec<Thing>,
    total_weight: i32,
    total_value: i32,
}
impl Things {
    pub fn new() -> Things {
        Things{
            things: Vec::new(),
            total_value: 0,
            total_weight: 0,
        }
    }

    pub fn get_count(&self) -> usize {
        self.things.len()
    }

    pub fn push_back(&mut self, weight: i32, value: i32) {
        self.things.push(Thing::new(weight, value));
        self.total_weight += weight;
        self.total_value += value;
    }

    pub fn get_total_value(&self) -> i32 {
        self.total_value
    }

    pub fn get_total_weight(&self) -> i32 {
        self.total_weight
    }

    pub fn get_thing_by_index(&self, index: usize) -> &Thing {
        &self.things[index]
    }

    pub fn is_thing(&self, thing: &Thing) -> bool{
        for v in &self.things {
            if v == thing {
                return true;
            }
        }

        false
    }

}

struct BorrowedThings<'a> {
    things: Vec<&'a Thing>,
    total_weight: i32,
    total_value: i32,
}
impl<'a> BorrowedThings<'a> {
    pub fn new() -> BorrowedThings<'a> {
        BorrowedThings{
            things: Vec::new(),
            total_value: 0,
            total_weight: 0,
        }
    }

    pub fn get_count(&self) -> usize {
        self.things.len()
    }

    pub fn push_back(&mut self, thing: &'a Thing) {
        self.things.push(thing);
        self.total_weight += thing.weight;
        self.total_value += thing.value;
    }

    pub fn get_total_value(&self) -> i32 {
        self.total_value
    }

    pub fn get_total_weight(&self) -> i32 {
        self.total_weight
    }

    pub fn get_thing_by_index(&self, index: usize) -> &'a Thing {
        self.things[index]
    }

    pub fn clone(&self) -> BorrowedThings<'a> {
        let mut new_things = BorrowedThings::new();
        
        for t in &self.things {
            new_things.push_back(t);
        }
        new_things.total_value = self.total_value;
        new_things.total_weight = self.total_weight;

        new_things
    }
}
impl<'a> PartialOrd for BorrowedThings<'a> {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        self.total_value.partial_cmp(&other.total_value)
    }
}
impl<'a> PartialEq for BorrowedThings<'a> {
    fn eq(&self, other: &Self) -> bool {
        self.total_value == other.total_value
    }
}



pub struct Thing {
    weight: i32,
    value: i32,
}
impl Thing {
    pub fn new(weight: i32, value: i32) -> Thing {
        Thing {
            weight,
            value,
        }
    }
}
impl PartialEq for Thing {
    fn eq(&self, other: &Thing) -> bool {
        self.value == other.value && self.weight == other.weight
    }
}


