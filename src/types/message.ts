export interface Message {
    content: string;
    created_at: Date;
    posted_by: string;
    is_posted_by_current_user: Boolean;
}