import Icon from './icons';

export default function SolutionIllustration({ variant }: { variant: 'government' | 'hiring' }) {
  const government = variant === 'government';
  return <div className="solution-illustration">
    <div className="solution-illustration-label mono"><span><span className="dot" />{government ? 'VERIFY ONCE. REUSE WITH CONSENT.' : 'VERIFICATION MOVES UPSTREAM.'}</span><span>ILLUSTRATION</span></div>
    {government ? <>
      <div className="reuse-sources"><span><Icon name="briefcase" size={17} />Income</span><span><Icon name="building" size={17} />Address</span><span><Icon name="graduation" size={17} />Enrollment</span></div>
      <div className="illustration-connector" aria-hidden="true">↓</div>
      <div className="reusable-record"><span className="reusable-record-icon"><Icon name="shield" size={28} /></span><p className="mono">ONE SET OF SOURCE-BACKED RECORDS</p><h2>Evidence that can go further.</h2><div className="field-tags"><span>Source</span><span>Verified fields</span><span>Timestamp</span></div></div>
      <div className="illustration-connector" aria-hidden="true">↓</div>
      <div className="reuse-programs">{['Housing support', 'Fee waivers', 'Benefit renewals'].map(program => <div key={program}><Icon name="check" size={16} /><span>{program}</span></div>)}</div>
      <p className="illustration-caption">Shared with permission. Accepted by each program.<br />Refreshed when current evidence is required.</p>
    </> : <>
      <div className="hiring-inbox"><Icon name="users" size={23} /><div><strong>Applications arrive.</strong><span>From people. From AI agents. From everywhere.</span></div></div>
      <div className="illustration-connector" aria-hidden="true">↓</div>
      <div className="hiring-verification"><span className="mono">RECLAIM · AT THE TOP OF THE FUNNEL</span><h2>Verify the claims first.</h2><ul>{['Employment records', 'Education credentials', 'Relevant work activity'].map(item => <li key={item}><Icon name="check" size={17} />{item}<span>Source evidence</span></li>)}</ul></div>
      <div className="illustration-connector" aria-hidden="true">↓</div>
      <div className="hiring-interview"><Icon name="briefcase" size={22} /><div><strong>Then shortlist and interview.</strong><span>Your team’s time goes further.</span></div></div>
      <p className="illustration-caption">Global source accounts. Low-cost checks.<br />Evidence before you commit interview time.</p>
    </>}
  </div>;
}
