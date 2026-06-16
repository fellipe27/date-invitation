export const InvitationStates = {
    PLEASE: 'please',
    ROMANTIC: 'romantic',
    DATE: 'date',
    VIBE: 'vibe',
    FINAL: 'final'
}
  
export type InvitationState = (typeof InvitationStates)[keyof typeof InvitationStates]
