use super::user::User;
use std::collections::BTreeMap;

#[allow(dead_code)]
pub struct Room {
    members: BTreeMap<u16, User>,
}

impl Room {
    pub fn new() -> Room {
        let members = BTreeMap::new();
        Room{
            members
        }
    }

    pub fn join(&mut self, user: User) {
        self.members.insert(user.get_id(), user);
    }

    pub fn leave(&mut self, id: u16) {
        self.members.remove(&id);
    }

    pub fn broadcast(&mut self, data: &[u8]) {
        for user in &mut self.members {
            let user = user.1;
            user.write(data).unwrap();
        }
    }
}