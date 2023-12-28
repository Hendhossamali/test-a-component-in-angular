import { VoteComponent } from "./vote.component";

describe('VoteComponent',()=>{
    let component:VoteComponent;

    beforeEach(()=>{
        component=new VoteComponent();
    })
    it('should increment vote when upvoted',()=>{
        component.upVote();
        expect(component.votes).toBe(1);
    })
    it('should decrement vote when downvoted',()=>{
        component.downVote();
        expect(component.votes).toBe(-1);
    })
})